import Link from 'next/link';
import navbarStyles from '../jss-styles/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
    const classes = navbarStyles();
    return (
        <div>
            <nav className={`${classes.navbar} navbar navbar-expand-md navbar-dark mb-4 py-1`}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item`}>
                            <a className={`${classes.navLink} nav-link`} href="#home">Home</a>
                        </li>
                        <li className={`nav-item`}>
                            <a className={`${classes.navLink} nav-link`} href="#about">About</a>
                        </li>
                        <li className={` nav-item`}>
                            <a className={`${classes.navLink} nav-link`} href="#projects">Projects</a>
                        </li>
                        <li className={`nav-item`}>
                            <a className={`${classes.navLink} nav-link`} href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={classes.socialMedia}>
                <a href="https://github.com/WhereIsMyRum" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                <a href="https://twitter.com/whereismywhisky" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                <a href="https://www.linkedin.com/in/piotr-polcik/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                <a href="https://www.facebook.com/PiotrPolcik" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a>
            </div>
        </div>
    )
};

export default Navbar;