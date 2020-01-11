import axios from 'axios';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import renderHTML from 'react-render-html';

import detailedProjectViewStyles from '../jss-styles/detailedProjectView';
import Loader from '../components/loader';

import content from '../config/content.json';


const DetailedProjectView = (props) => {
    const [title, setTitle] = useState({
        'title': '',
        'link': ''
    });
    const [sections, setSections] = useState([]);
    const [technologies, setTechnologies] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const classes = detailedProjectViewStyles();


    useEffect(() => {
        async function fetchData() {
            const result = await axios(`api/projects/${props.id}`);
            setTitle({
                'title': result.data.title.title,
                'link': result.data.title.url
            })
            console.log(result.data.sections)
            setSections(result.data.sections);
            setTechnologies(result.data.technologies);
            setIsLoading(false);
        }
        fetchData();
    }, [])

    return (
        <div className={classes.projectContainer}>
            {isLoading && <Loader />}
            {!isLoading && sections.length > 0 && technologies.length > 0 &&
                <div className={`${props.style}-wrapper`}>
                    <div onClick={() => props.setDetailID('')} className={`${classes.backButton} button`}><FontAwesomeIcon icon={faArrowLeft} />{content.projectDetails.backButton}</div>
                    <div className={`${classes.title} ${classes.innerContainer} ${props.style}`}>
                        <h4>{title.title}</h4>
                        <div className={`${classes.link} button`}>
                            <a href={title.link} target="_blank">{content.projectDetails.githubButton}</a>
                        </div>
                    </div>
                    <div>
                        <div className={`${classes.technologiesContainer} ${classes.innerContainer} ${props.style}`}>
                            {technologies.map(item => {
                                return (
                                    <span key={item.content} title={item.hover} className={`${classes.technology} technology-item`}>
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                        {item.content}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                    <div className={`${classes.sectionsContainer}`}>
                        {sections.map(section => {
                            return (
                                <div key={section.title} className={`${classes.section} ${classes.innerContainer} ${props.style}`}>
                                    <div>
                                        <h5>{section.title}</h5>
                                        <div>{renderHTML(section.content)}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
        </div>
    );
}

export default DetailedProjectView;