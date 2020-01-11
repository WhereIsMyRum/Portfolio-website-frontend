import globalStyles from '../jss-styles/global';
import projectsStyles from '../jss-styles/projects'
import ProjectsDisplay from '../components/projectsDisplay';

import content from '../config/content.json';


const Projects = (props) => {
    const globalClasses = globalStyles();
    const classes = projectsStyles();
        return (
            <div id="projects" className={classes.projects}>
                <div className={globalClasses.sectionHeader}>
        <h2>{content.projects.title}</h2>
                </div>
                <div className={globalClasses.contentWrapper}>
                    <ProjectsDisplay data={props.props}/>
                </div>
            </div>
        )
};

export default Projects;