import globalStyles from '../../jss-styles/index/global';
import projectsStyles from '../../jss-styles/index/projects'
import ProjectsDisplay from './projectsDisplay';


const Projects = (props) => {
    const globalClasses = globalStyles();
    const classes = projectsStyles();
    return (
        <div id="projects" className={classes.projects}>
            <div className={globalClasses.sectionHeader}>
                <h2>{props.content.title}</h2>
                <p>{props.content.subtitle}</p>
            </div>
            <div className={globalClasses.contentWrapper}>
                <ProjectsDisplay content={props.content.projectsDisplay} data={props.props} />
            </div>
        </div>
    )
};

export default Projects;