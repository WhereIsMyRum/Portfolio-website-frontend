import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import navbarStyles from '../jss-styles/navbar';

import content from '../config/content.json';


const Navbar = () => {
    const classes = navbarStyles();
    return (
        <div>
            <nav className={`${classes.navbar} navbar navbar-expand-md navbar-dark mb-4 py-1`} id="navbar">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item`}>
                            <span className={`${classes.navLink} nav-link`} data-link="home">{content.navbar.section1}</span>
                        </li>
                        <li className={`nav-item`}>
                            <span className={`${classes.navLink} nav-link`} data-link="about">{content.navbar.section2}</span>
                        </li>
                        <li className={` nav-item`}>
                            <span className={`${classes.navLink} nav-link`} data-link="projects">{content.navbar.section3}</span>
                        </li>
                        <li className={`nav-item`}>
                            <span className={`${classes.navLink} nav-link`} data-link="contact">{content.navbar.section4}</span>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={classes.socialMedia}>
                <a href={content.social.github} target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                <a href={content.social.twitter} target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href={content.social.linkedin} target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href={content.social.facebook} target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
            </div>
        </div>
    )
};

export default Navbar;