import blogContentStyles from '../../jss-styles/blog/blogContent';

import { faGithub, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PostsOverview from './postsOverview';
import ProjectsDisplay from '../index/projectsDisplay';


const BlogContent = (props) => {
    const classes = blogContentStyles();
    return (
        <div className={classes.contentWrapper}>
            <div className={classes.background}>
                <div className={classes.header}>
                    <h1>A <span>W</span>e<span>E B</span>it <span>Dev</span> Blog</h1>
                    <p>{props.blog.header.subtitle}</p>
                    <div className={classes.socialMedia}>
                        <a href={props.social.github} rel="nofollow" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                        <a href={props.social.twitter} rel="nofollow" target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href={props.social.linkedin} rel="nofollow" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href={props.social.facebook} rel="nofollow" target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
                </div>
                </div>
                <PostsOverview content={props.blog.overview} data={props.data}/>
            </div>
        </div>
    );
};
export default BlogContent;