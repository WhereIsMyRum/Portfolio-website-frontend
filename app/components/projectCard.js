import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

import { projectsCardStyles, getRandomCardClass } from '../jss-styles/projectCard'


const ProjectCard = (props) => {
    const classes = projectsCardStyles();
    const [style, setStyle] = useState('card1');

    useEffect(() => {
        setStyle(getRandomCardClass());
    })
    return (
        <div className={`${classes.cardGeneral} ${classes[style]} ${style}`}>
            <span></span>
            <div className={`${classes.content}`}>
                <div>
                    <h3>{props.data.name.replace(/-/g, ' ')}
                        <div></div>
                    </h3>
                </div>
                <p>{props.data.description}</p>
                <div data-link="projects" data-history="push" onClick={() => {
                    props.setDetailID(props.data.name);
                    props.setCardStyle(style)
                }}
                    className={`${classes.navLink} more`}>{props.content.detailsButton}<FontAwesomeIcon icon={faArrowRight} /></div>
            </div>
        </div>
    );
}

export default ProjectCard;