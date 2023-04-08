import globalStyles from "../../jss-styles/global";
import aboutStyles from "../../jss-styles/top-level-components/about";

const About = (props) => {
  const globalClasses = globalStyles();
  const classes = aboutStyles();

  return (
    <div id="about" className={classes.about}>
      <div className={globalClasses.sectionHeader}>
        <h2>{props.content.title}</h2>
      </div>
      <div
        className={`${classes.fullPageCenter} ${globalClasses.contentWrapper} row`}
      >
        <div className={`${classes.nameTextWrapper} row`}>
          <div
            className={`${classes.aboutImage} offset-lg-2 col-lg-3 offset-md-1 col-md-4 col-12 text-center mb-4`}
          >
            <img
              className={classes.myPhoto}
              src={props.data.img}
              alt="My photo in black and white"
            ></img>
          </div>
          <div
            className={` ${globalClasses.paragraphStyling} col-md-4 offset-md-0 col-sm-10 offset-sm-1 col-12 text-center text-md-left mb-5`}
          >
            <p>{props.content.text.paragraph1}</p>
            <p>{props.content.text.paragraph2}</p>
            <p>{props.content.text.paragraph3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
