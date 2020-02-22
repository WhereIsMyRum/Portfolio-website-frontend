import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import blogPostShareStyles from '../../jss-styles/blog/blogPostShare';

import { useRouter } from 'next/router'


const BlogPostShare = (props) => {
    const router = useRouter();
    const classes = blogPostShareStyles(props.colorScheme);

    let rootUrl;
    if (process.browser) {
        rootUrl = window.location.protocol + "//" + window.location.hostname;
    } else {
        rootUrl = process.env.ROOT_URL;
    }

    return (
        <span className={classes.wrapper}>
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(rootUrl + router.asPath)}`} rel="nofollow" target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(rootUrl + router.asPath)}&title=${props.title.replace(/-/g, "+")}`} rel="nofollow" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(rootUrl + router.asPath)}&amp;src=sdkpreparse`} rel="nofollow" target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
        </span>
    );
};

export default BlogPostShare;