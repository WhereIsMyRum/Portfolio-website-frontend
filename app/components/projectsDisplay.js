import { useState } from 'react';
import projectsDisplayStyles from '../jss-styles/projectsDisplay';
import ProjectCard from '../components/projectCard';
import DetailedProjectView from '../components/detailedProjectView';

const ProjectsDisplay = (props) => {
    const [ detailID, setDetailID ] = useState('');
    const [ cardStyle, setCardStyle ] = useState('');
    const classes = projectsDisplayStyles();
    if (detailID) {
        return (
            <DetailedProjectView id={detailID} style={cardStyle} setDetailID={setDetailID} setCardStyle={setCardStyle}/>
        )
    } else {
        // move projetsContainer into separate component
        
        return (
            <div className={classes.projectsContainer}>
                {props.data.map( repo => {
                    return <ProjectCard key={repo.id} data={repo} setDetailID={setDetailID} setCardStyle={setCardStyle}/>
                })}
            </div>
        )
    }
};

export default ProjectsDisplay;
