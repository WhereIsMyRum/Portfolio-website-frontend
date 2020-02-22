import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LanguageSelector from './languageSelector';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import navbarStyles from '../../jss-styles/index/navbar';


const Navbar = (props) => {
    const router = useRouter();
    console.log(props.colorSchema);
    const classes = navbarStyles(props.colorSchema);
    const [focus, setFocus] = useState('');

    useEffect(() => {
        if (window.localStorage.getItem('scroll') && window.localStorage.getItem('scroll') !== 'null') {
            const focus = window.localStorage.getItem('scroll');
            try {
                document.getElementById(focus).scrollIntoView({
                    behavior: 'smooth'
                })
            } catch (e) {
                window.localStorage.removeItem('scroll');
            }

            setFocus(focus);
            window.localStorage.removeItem('scroll');

        } else if (focus !== '' && focus) {
            window.localStorage.removeItem('scroll');
            document.getElementById(focus).scrollIntoView({
                behavior: 'smooth'
            })
        } else {
            window.localStorage.removeItem('scroll');
        }

    }, [focus])

    useEffect(() => setupNavbarScrolling(), []);

    const setupNavbarScrolling = (elems) => {
        let links = elems;
        let setNavbarClosing = false
        let navbarToggler;
    
        if (!links) {
            navbarToggler = document.getElementsByClassName('navbar-toggler')[0];
            links = document.getElementsByClassName('nav-link');
            if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 770) {
                setNavbarClosing = true;
            }
        }
    
        for (let link of links) {
            link.addEventListener('click', () => {
                if (setNavbarClosing) navbarToggler.click();
                window.localStorage.removeItem('scroll');
    
                if (link.getAttribute('data-path') && window.location.pathname !== link.getAttribute('data-path')) {
                    if (link.getAttribute('data-link')) {
                        window.localStorage.setItem('scroll', link.getAttribute('data-link'));
                    }
                    console.log(link.getAttribute('data-path'));
                    router.push(link.getAttribute('data-path'));
                } else if (focus === link.getAttribute('data-link')) {
                    setFocus('');
                    setFocus(link.getAttribute('data-link'));
                } else {
                    setFocus(link.getAttribute('data-link'));
                }
            })
        }
    }

    const toggleLanguageSelector = (dir) => {
        const langSelect = document.getElementById('language');
        let setInitialState = false;

        if (dir === 'open') setInitialState = true;

        animateVh(dir, langSelect, setInitialState);
    }

    return (
        <div>
            <LanguageSelector content={props.content.languageSelector} close={toggleLanguageSelector} content={props.content.languageSelector} />
            <nav id="navbar" className={`${classes.navbar} navbar navbar-expand-md navbar-dark mb-4 py-1 ${props.navbarStyling.fixed}`} id='navbar'>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav ml-auto'>
                        <li className={`${classes.navLinkWrapper} nav-item`}>
                            <span className={`${classes.navLink} nav-link`} data-path='/' data-link='home'>{props.content.section1}</span>
                        </li>
                        <li className={`nav-item`}>
                            <span className={`${classes.navLink} nav-link`} data-path='/' data-link='about'>{props.content.section2}</span>
                        </li>
                        <li className={` nav-item`}>
                            <span className={`${classes.navLink} nav-link`} data-path='/' data-link='projects'>{props.content.section3}</span>
                        </li>
                        <li className={`nav-item`}>
                            <span className={`${classes.navLink} nav-link`} data-path='/' data-link='contact'>{props.content.section4}</span>
                        </li>
                        <li className={`nav-item`}>
                            <Link href="/blog"><a className={`${classes.navLink} nav-link`} data-path='/blog' data-link='navbar' >{props.content.section5}</a></Link>
                        </li>
                        <li className={`${classes.langSelect} nav-item`}>
                            <span onClick={() => toggleLanguageSelector('open')} className={`${classes.navLink} nav-link`} data-link=''>{props.content.lang}</span>
                        </li>
                    </ul>
                </div>
            </nav>
            { props.navbarStyling.socialDisplay &&
                <div className={classes.socialMedia}>
                    <a href={props.social.github} rel="nofollow" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                    <a href={props.social.twitter} rel="nofollow" target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href={props.social.linkedin} rel="nofollow" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href={props.social.facebook} rel="nofollow" target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
                </div>
            }
        </div>
    )
};

export default Navbar;