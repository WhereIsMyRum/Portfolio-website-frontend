import postThumbnailStyles from '../../jss-styles/blog/postThumbnail';

const imgRootUrl = "http://frontend.docker/api/blog/images";

const PostThumbnail = (props) => {
    const classes = postThumbnailStyles();
    const formatDate = (date) => {
        const d = new Date(date);
        return {
            month: d.toLocaleString('en-US', {month: 'short'}),
            year: d.getFullYear()
        }
    }

    const formattedDate = formatDate(props.data.created);

    return (
        <div className={classes.wrapper}>
            <div className={`${classes.imgHoverZoom} `}>
                <img alt={props.data. thumb.description} className={classes.thumbnail} src={`${imgRootUrl}/${props.data.title}/thumb`}></img>
            </div>
            <div className={classes.summaryWrapper}>
                <h3 className={classes.title}>{props.data.title}</h3>
                <p className={classes.description}>{props.data.description}</p>
                <div>
                    <span className={classes.month}>{formattedDate.month}</span>
                    <span className={classes.year}> {formattedDate.year}</span>
                </div>
                <div className={classes.tagsWrapper}>
                {props.data.tags && 
                    props.data.tags.map(tag => {
                        return <p className={classes.tag}>tag</p>
                    })}
                </div>
            </div>

        </div>
    );
};
export default PostThumbnail;