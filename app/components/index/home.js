import homeStyles from '../../jss-styles/index/home';
import { useEffect } from 'react';
import Link from 'next/link';
import { toggleLanguageSelector } from '../../utils/utils';


const Home = (props) => {
    useEffect(() => {
        const homeNav = window.document.getElementById('home-nav');
        new Waypoint({
            element: window.document.getElementById('about'),
            handler: (direction) => {
                if (direction === "down") {
                    homeNav.style.zIndex = 0
                } else {
                    homeNav.style.zIndex = 10
                }
            },
            offset: 295
        })
    }, [])

    const classes = homeStyles();
    return (<div id="home">
        <div className={classes.wrapper}>
            <nav id="home-nav"className={classes.navbar}>
                <div>
                    <span className={'active nav-link'} data-path="/" data-link="home">Home</span>
                    <span className={'nav-link'} data-path="/" data-link="about">About</span>
                    <span className={'nav-link'} data-path="/" data-link="projects">Projects</span>
                    <span className={'nav-link'} data-path="/" data-link="contact">Contact</span>
                    <Link href="/blog"><span className={'nav-link'} data-path="/blog" data-link="__next">Blog</span></Link>
                    <span onClick={() => toggleLanguageSelector('open')} className={'nav-link'}>Language</span>
                </div>
            </nav>
            <div className={classes.parallaxImg}>
                <div className={classes.breakFix}></div>
            </div>
            <div className={classes.introduction}>
                <div className={classes.jumbotron}>
                    <p className={classes.introTxt}>{props.content.intro.greeting}</p> <span className={classes.introTxt}>{props.content.intro.introduction}&nbsp;
                        <h1 style={{ display: 'inline', textTransform: 'none' }} className={classes.standingOutTxt}>{props.content.intro.nameVisible}<span style={{ display: 'none' }}>{props.content.intro.nameHidden}</span></h1></span><span className={classes.introTxt}>,</span>
                    <p className={classes.introTxt}>{props.content.intro.welcome}</p>
                </div>
            </div>
        </div>
    </div>)
};

export default Home;