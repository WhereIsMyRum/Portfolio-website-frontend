import Link from 'next/link';

import postThumbnailStyles from '../../jss-styles/blog/postThumbnail';
import { formatDate, parsePostTitle, getColorScheme } from '../../utils/utils'

const imgRootUrl = "/api/blog/images";

const PostThumbnail = (props) => {
    const colorScheme = getColorScheme(props.colorScheme);
    if (props.data.title > 15) {
        console.log(props.colorScheme, colorScheme)
    }
    const classes = postThumbnailStyles(colorScheme);

    const formattedDate = formatDate(props.data.created);
    return (
        <a href={`/blog/${props.data.title}`} className={classes.wrapper}>
                <div className={`${classes.imgHoverZoom} `}>
                    <img alt={props.data.thumb.description} className={classes.thumbnail} src={`${imgRootUrl}/${props.data.title}/thumb`}></img>
                </div>
                <div className={classes.summaryWrapper}>
                    <h3 className={classes.title}>{parsePostTitle(props.data.title)}</h3>
                    <p className={classes.description}>{props.data.description}</p>
                    <div>
                        <span className={classes.month}>{formattedDate.month}</span>
                        <span className={classes.year}> {formattedDate.year}</span>
                    </div>
                    <div className={classes.tagsWrapper}>
                    {props.data.tags && 
                        props.data.tags.map(tag => {
                            return <p className={classes.tag}>{tag}</p>
                        })}
                    </div>
                </div>
        </a>
    );
};
export default PostThumbnail;