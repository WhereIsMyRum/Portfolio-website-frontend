import { useState } from 'react';

import projectsDisplayStyles from '../jss-styles/projectsDisplay';
import ProjectCard from '../components/projectCard';
import DetailedProjectView from '../components/detailedProjectView';


const ProjectsDisplay = (props) => {
    const [detailID, setDetailID] = useState('');
    const [cardStyle, setCardStyle] = useState('');
    const classes = projectsDisplayStyles();
    if (detailID) {
        return (
            <DetailedProjectView content={props.content.projectDetails} id={detailID} style={cardStyle} setDetailID={setDetailID} setCardStyle={setCardStyle} />
        )
    } else {
        return (
            <div className={classes.projectsContainer}>
                {props.data.map(repo => {
                    return <ProjectCard content={props.content.projectCard} key={repo.id} data={repo} setDetailID={setDetailID} setCardStyle={setCardStyle} />
                })}
            </div>
        )
    }
};

export default ProjectsDisplay;
