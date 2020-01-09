import Layout from "../components/layout";
import globalStyles from '../jss-styles/global';
import aboutStyles from '../jss-styles/about'

const About = () => {
    const globalClasses = globalStyles();
    const classes = aboutStyles();

    return (
    <div id="about" className={classes.about}>
        <div className={globalClasses.sectionHeader}>
            <h2>About</h2>
        </div>
            <div className={`${classes.fullPageCenter} ${globalClasses.contentWrapper} row`}>
                <div className={`${classes.nameTextWrapper} row`}>
                    <div className={`${classes.aboutImage} offset-lg-2 col-lg-3 offset-md-1 col-md-4 col-12 text-center mb-4`}>
                        <img className={classes.myPhoto} src="/static/images/me_bw.jpg" alt="My photo in black and white"></img>
                    </div>
                    <div className={` ${globalClasses.paragraphStyling} col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-12 text-center text-md-left mb-5`}>
                        <p>I'm Piotr, Master of Computer Science student at Technical University of Denmark and AGH University of Science
                            and Technology in Cracow graduate, where I got my BSc of Engineering diploma.
                        </p> 
                        <p>My main focus is Backend developement, with some interest in DevOps, CI/CD and cloud services administration.</p>
                        <p>I'm open to all cooperation proposals, as I love to learn by doing.</p>
                    </div>
                </div>
            </div>
    </div>
    )
};

export default About;