import { projectsCardStyles, getRandomCardClass } from '../jss-styles/projectCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const ProjectCard = (props) => {
    const classes = projectsCardStyles();
    const theme = getRandomCardClass();
    return (
        <div className={`${classes.cardGeneral} ${classes[theme]} ${theme}`}>
            <span></span>
            <div className={`${classes.content}`}>
                <div>
                    <h3>{props.data.name.replace(/-/g, ' ')}
                        <div></div>
                    </h3>
                </div>
                <p>{props.data.description}</p>
                <div data-link="projects" onClick={() => {props.setDetailID(props.data.name); props.setCardStyle(theme)}} className={`${classes.navLink} more`}>more<FontAwesomeIcon icon={faArrowRight}/></div>
            </div>
        </div>
    );
}

export default ProjectCard;