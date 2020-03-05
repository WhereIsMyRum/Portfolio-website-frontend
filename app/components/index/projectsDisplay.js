import { useState, useEffect } from 'react';

import projectsDisplayStyles from '../../jss-styles/index/projectsDisplay';
import ProjectCard from './projectCard';
import DetailedProjectView from './detailedProjectView';


const ProjectsDisplay = (props) => {
    const [detailID, setDetailID] = useState('');
    const [cardStyle, setCardStyle] = useState('');
    const classes = projectsDisplayStyles();

    useEffect(() => {
        setupProjectCardScrolling();
    })

    const setupProjectCardScrolling = () => {
        const links = document.getElementsByClassName("more");
        for (let link of links) {
            if (link.getAttribute('data-link')) {
                link.addEventListener("click", () => {
                    const targetedElement = document.getElementById(link.getAttribute('data-link'))
                    targetedElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            }
        }
    }

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
