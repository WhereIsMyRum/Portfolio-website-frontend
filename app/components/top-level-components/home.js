import { useEffect } from "react";

import { toggleLanguageSelector } from "../../utils/utils";

import homeStyles from "../../jss-styles/top-level-components/home";

const Home = (props) => {
  useEffect(() => {
    const homeNav = window.document.getElementById("home-nav");
    new Waypoint({
      element: window.document.getElementById("about"),
      handler: (direction) => {
        console.log("thing");
        if (direction === "down") {
          homeNav.style.zIndex = 0;
        } else {
          homeNav.style.zIndex = 10;
        }
      },
      offset: 295,
    });
  }, []);

  const classes = homeStyles();
  return (
    <div id="home">
      <div
        className={classes.wrapper}
        style={{ backgroundImage: `url('${props.data.bg}')` }}
      >
        <nav id="home-nav" className={classes.navbar}>
          <div>
            <span className={"active nav-link"} data-path="/" data-link="home">
              {props.menu.section1}
            </span>
            <span className={"nav-link"} data-path="/" data-link="about">
              {props.menu.section2}
            </span>
            <span className={"nav-link"} data-path="/" data-link="projects">
              {props.menu.section3}
            </span>
            <span className={"nav-link"} data-path="/" data-link="contact">
              {props.menu.section4}
            </span>
            <span
              onClick={() => toggleLanguageSelector("open")}
              className={"nav-link"}
            >
              {props.menu.lang}
            </span>
          </div>
        </nav>
        <div
          className={classes.parallaxImg}
          style={{ backgroundImage: `url('${props.data.bgMoving}')` }}
        >
          <div className={classes.breakFix}></div>
        </div>
        <div className={classes.introduction}>
          <div className={classes.jumbotron}>
            <p className={classes.introTxt}>{props.content.intro.greeting}</p>{" "}
            <span className={classes.introTxt}>
              {props.content.intro.introduction}&nbsp;
              <h1
                style={{ display: "inline", textTransform: "none" }}
                className={classes.standingOutTxt}
              >
                {props.content.intro.nameVisible}
                <span style={{ display: "none" }}>
                  {props.content.intro.nameHidden}
                </span>
              </h1>
            </span>
            <span className={classes.introTxt}>,</span>
            <p className={classes.introTxt}>{props.content.intro.welcome}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
