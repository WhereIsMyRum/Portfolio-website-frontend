import axios from 'axios';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import renderHTML from 'react-render-html';

import Loader from '../loader';

import detailedProjectViewStyles from '../../jss-styles/building-blocks/detailedProjectView';


const DetailedProjectView = (props) => {
    const [title, setTitle] = useState({
        'title': '',
        'link': ''
    });
    const [sections, setSections] = useState([]);
    const [technologies, setTechnologies] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [code500, setCode500] = useState(false);
    const classes = detailedProjectViewStyles();


    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios(`/api/projects/${props.id}`);
                setTitle({
                    'title': result.data.title.title,
                    'link': result.data.title.url
                })
                setSections(result.data.sections);
                setTechnologies(result.data.technologies);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setCode500(true);
                return;
            }
        }
        fetchData();
    }, [])

    return (
        <div className={classes.projectContainer}>
            {isLoading && <Loader />}
            {code500 && <div className={classes.errorMessage}>
                            <p>{props.content.error}</p>
                            <div className={`${classes.backButton} ${classes.errorBackButton}`} onClick={() => props.setDetailID('')}>Back</div>
                        </div>}
            {!isLoading && !code500 &&sections.length > 0 && technologies.length > 0 &&
                <div className={`${props.style}-wrapper`}>
                    <div onClick={() => props.setDetailID('')} className={`${classes.backButton} button back-button`}><FontAwesomeIcon icon={faArrowLeft} />{props.content.backButton}</div>
                    <div className={`${classes.title} ${classes.innerContainer} ${props.style}`}>
                        <h4>{title.title}</h4>
                        <div className={`${classes.link} button`}>
                            <a href={title.link} rel="nofollow" target="_blank">{props.content.githubButton}</a>
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