import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import LanguageSelector from './index/languageSelector';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import navbarStyles from '../jss-styles/navbar';
import { toggleLanguageSelector } from '../utils/utils';

const Navbar = (props) => {
    const router = useRouter();
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

    useEffect(() => {
        setupNavbarScrolling();
        setUpNavbarColorWaypoints();
        if (props.styling.waypoint.setup) {
            const offset = props.styling.waypoint.offset ? props.styling.waypoint.offset : 0;
            const navbar = window.document.getElementById('navbar');

            new Waypoint({
                element: window.document.getElementById(props.styling.waypoint.id),
                handler: (direction) => { 
                if (direction === "down") {
                    navbar.style.right = 0
                }
                if (direction === "up") {
                    navbar.style.right = "-100%"
                } },
                offset: -offset
            });
        }
    }, []);

    const setupNavbarScrolling = async(elems) => {
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
                setFocus('');
                if (setNavbarClosing) navbarToggler.click();
                window.localStorage.removeItem('scroll');
                if (link.getAttribute('data-path') && window.location.pathname !== link.getAttribute('data-path')) {
                    if (link.getAttribute('data-link')) {
                        window.localStorage.setItem('scroll', link.getAttribute('data-link'));
                    }
                    router.push(link.getAttribute('data-path'))
                } else if (focus === link.getAttribute('data-link')) {
                    setFocus('');
                    setFocus(link.getAttribute('data-link'));
                } else {
                    setFocus(link.getAttribute('data-link'));
                }
            })
        }
    }

    const setUpNavbarColorWaypoints = async () => {
        const links = document.querySelectorAll('.nav-item .nav-link');
        Array.from(links).forEach((link, i) => {
            if (link.getAttribute('data-link')) {
                new Waypoint({
                    element: window.document.getElementById(link.getAttribute('data-link')),
                    handler: (direction) => {
                        if (direction === "down") {
                            if (i === 0) {
                                link.classList.add('active');
                            } else {
                                links[i - 1].classList.remove('active');
                                link.classList.add('active');
                            }
                        } else {
                            if (i !== 0) {
                                links[i - 1].classList.add('active');
                                link.classList.remove('active');
                            }
                        }
                    },
                    offset: 20
                })
            }
        });
    }

    return (
        <div>
            <LanguageSelector content={props.content.languageSelector} close={toggleLanguageSelector} content={props.content.languageSelector} />
            <nav id="navbar" className={`${classes.navbar} navbar navbar-expand-md navbar-dark mb-4 py-1`} id='navbar'>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav ml-auto'>
                        <li className={`nav-item`}>
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
                        <li className={`${classes.langSelect} nav-item`}>
                            <span onClick={() => toggleLanguageSelector('open')} className={`${classes.navLink} nav-link`} data-link=''>{props.content.lang}</span>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={classes.socialMedia}>
                <a href={props.social.github} rel="nofollow" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                <a href={props.social.twitter} rel="nofollow" target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
                <a href={props.social.linkedin} rel="nofollow" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href={props.social.facebook} rel="nofollow" target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
            </div>
        </div>
    )
};

export default Navbar;