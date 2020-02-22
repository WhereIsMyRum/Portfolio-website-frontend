import { formatDate } from '../../utils/utils';

import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import postDetailedHeaderStyles from '../../jss-styles/blog/postDetailedHeader';
import { parsePostTitle } from '../../utils/utils';

import BlogPostShare from './blogPostShare';

import { useRouter } from 'next/router'


const imgAPIUrl = "/api/blog/images";

const PostDetailedHeader = (props) => {
    const router = useRouter();
    const classes = postDetailedHeaderStyles(props.colorScheme);
    const date = formatDate(props.created, 'long');

    let rootUrl;
    if (process.browser) {
        rootUrl = window.location.protocol + "//" + window.location.hostname;
    } else {
        rootUrl = process.env.ROOT_URL;
    }

    return (
        <div className={classes.wrapper} style={{backgroundColor: props.thumb.color ? props.thumb.color : ''}}>
            <div className={classes.title}>
                <h1>{parsePostTitle(props.title)}</h1>
                <p>{date.day} {date.month}, {date.year}</p>
                <BlogPostShare title={props.title} colorScheme={props.colorScheme} />
            </div>
            <div className={classes.imageWrapper}>
                <img alt={props.thumb.description} className={classes.image} src={`${imgAPIUrl}/${props.title.replace(/ /g, '-')}/thumb`}></img>
            </div>

        </div>
    );
};
export default PostDetailedHeader;