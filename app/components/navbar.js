import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LanguageSelector from '../components/languageSelector';

import navbarStyles from '../jss-styles/navbar';


const Navbar = (props) => {
    const classes = navbarStyles();
    const toggleLanguageSelector = (dir) => {
        const langSelect = document.getElementById("language");
        const navbar = document.getElementById("navbar");

        const animateVh = ((dir, elem) => {
            if (dir === "open") {
                if (parseInt(elem.style.height, 10) < window.innerHeight * 1.2) {
                    const incr = String(parseInt(elem.style.height, 10) + window.innerHeight / 20); 
                    elem.style.height = incr > window.innerHeight * 1.2 ? window.innerHeight * 1.2 + 1 + "px" : incr + "px";
                    requestAnimationFrame(() => animateVh(dir, elem));
                }
                if (parseInt(elem.style.height, 10) > window.innerHeight * 0.8) {
                    Array.from(elem.children).map((elem) => {
                        requestAnimationFrame(() => animateOpacity(elem))
                    })
                }
            } else {
                if (parseInt(elem.style.height, 10) > 0) {
                    const subst = String(parseInt(elem.style.height, 10) - window.innerHeight / 13);
                    elem.style.height = subst < 0 ? "0" + "px" : subst + "px";
                    requestAnimationFrame(() => animateVh(dir, elem));
                } else {
                    navbar.style.opacity = 0.8;
                    langSelect.style.display = "none";
                }
                Array.from(langSelect.children).map((elem) => {
                    elem.style.opacity = 0
                })
            }
        });

        const animateOpacity = (elem) => {
            if (!elem.style.opacity) elem.style.opacity = 0;
            if (elem.style.opacity < 1) {
                elem.style.opacity = parseFloat(elem.style.opacity) + 0.2;
                requestAnimationFrame(() => { animateOpacity(elem) })
            }
        }

        if (dir === "open") {
            langSelect.style.display = "initial";
            langSelect.style.height = 0;
            animateVh(dir, langSelect);
        } else if (dir === "close") {
            animateVh(dir, langSelect);
        }

    }
    return (
        <div>
            <LanguageSelector content={props.content.languageSelector} close={toggleLanguageSelector} content={props.content.languageSelector} />
            <nav className={`${classes.navbar} navbar navbar-expand-md navbar-dark mb-4 py-1`} id="navbar">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item`}>
                            <span className={`${classes.navLink} nav-link`} data-link="home">{props.content.section1}</span>
                        </li>
                        <li className={`nav-item`}>
                            <span className={`${classes.navLink} nav-link`} data-link="about">{props.content.section2}</span>
                        </li>
                        <li className={` nav-item`}>
                            <span className={`${classes.navLink} nav-link`} data-link="projects">{props.content.section3}</span>
                        </li>
                        <li className={`nav-item`}>
                            <span className={`${classes.navLink} nav-link`} data-link="contact">{props.content.section4}</span>
                        </li>
                        <li className={`${classes.langSelect} nav-item`}>
                            <span onClick={() => toggleLanguageSelector("open")} className={`${classes.navLink} nav-link`} data-link="">{props.content.lang}</span>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={classes.socialMedia}>
                <a href={props.social.github} target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                <a href={props.social.twitter} target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href={props.social.linkedin} target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href={props.social.facebook} target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
            </div>
        </div>
    )
};

/*<div className={`${classes.languageSelector} `} id="language">
                <select className={`${classes.select}`}>
                    {content.availableLanguages.map((lang) => {
                    const key = Object.keys(lang)[0];
                    return <option key={key} className={classes.langValue} tabIndex="-1" value={key}>{lang[key]}</option>
                    })}
                </select>
            </div>*/

export default Navbar;