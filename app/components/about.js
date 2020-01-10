import globalStyles from '../jss-styles/global';
import aboutStyles from '../jss-styles/about'

import content from '../config/content.json';


const About = () => {
    const globalClasses = globalStyles();
    const classes = aboutStyles();

    return (
        <div id="about" className={classes.about}>
            <div className={globalClasses.sectionHeader}>
                <h2>{content.about.title}</h2>
            </div>
            <div className={`${classes.fullPageCenter} ${globalClasses.contentWrapper} row`}>
                <div className={`${classes.nameTextWrapper} row`}>
                    <div className={`${classes.aboutImage} offset-lg-2 col-lg-3 offset-md-1 col-md-4 col-12 text-center mb-4`}>
                        <img className={classes.myPhoto} src="/static/images/me_bw.jpg" alt="My photo in black and white"></img>
                    </div>
                    <div className={` ${globalClasses.paragraphStyling} col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-12 text-center text-md-left mb-5`}>
                        <p>{content.about.text.paragraph1}</p>
                        <p>{content.about.text.paragraph2}</p>
                        <p>{content.about.text.paragraph3}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;