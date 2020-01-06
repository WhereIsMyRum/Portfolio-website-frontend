import globalStyles from '../jss-styles/global';
import projectsStyles from '../jss-styles/projects'
import ProjectsDisplay from '../components/projectsDisplay';

const Projects = (props) => {
    const globalClasses = globalStyles();
    const classes = projectsStyles();
        return (
            <div id="projects" className={classes.projects}>
                <div className={globalClasses.sectionHeader}>
                    <h2>Projects</h2>
                </div>
                <ProjectsDisplay props={props.props}/>
            </div>
        )
};

export default Projects;