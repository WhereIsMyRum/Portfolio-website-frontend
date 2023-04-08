import { useState, useEffect } from "react";

import ProjectCard from "../building-blocks/projectCard";
import DetailedProjectView from "../building-blocks/detailedProjectView";

import globalStyles from "../../jss-styles/global";
import projectsStyles from "../../jss-styles/top-level-components/projects";

const Projects = (props) => {
  const [detailID, setDetailID] = useState("");
  const [cardStyle, setCardStyle] = useState("");

  const globalClasses = globalStyles();
  const classes = projectsStyles();

  useEffect(() => {
    setupProjectCardScrolling();
  });

  useEffect(() => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
      fadeOutElement(loader);
    }, 300);
  }, []);

  const setupProjectCardScrolling = () => {
    const links = document.getElementsByClassName("more");
    for (let link of links) {
      if (link.getAttribute("data-link")) {
        link.addEventListener("click", () => {
          const targetedElement = document.getElementById(
            link.getAttribute("data-link")
          );
          targetedElement.scrollIntoView({
            behavior: "smooth",
          });
        });
      }
    }
  };

  return (
    <div id="projects" className={classes.projects}>
      <div className={globalClasses.sectionHeader}>
        <h2>{props.content.title}</h2>
        <p>{props.content.subtitle}</p>
      </div>
      <div className={globalClasses.contentWrapper}>
        {detailID && (
          <DetailedProjectView
            content={props.content.projectDetails}
            id={detailID}
            style={cardStyle}
            setDetailID={setDetailID}
            setCardStyle={setCardStyle}
          />
        )}
        {!detailID && (
          <div className={classes.projectsContainer}>
            {props.props.map((repo) => {
              return (
                <ProjectCard
                  content={props.content.projectCard}
                  key={repo.id}
                  data={repo}
                  setDetailID={setDetailID}
                  setCardStyle={setCardStyle}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
//<ProjectsDisplay content={props.content.projectsDisplay} data={props.props} />

export default Projects;
