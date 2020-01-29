import blogHeaderStyles from '../../jss-styles/blog/blogHeader';


const BlogHeader = (props) => {
    const classes = blogHeaderStyles();
    return (
        <div id="header" className={classes.headerWrapper}>
            Blog
        </div>
    );
};

export default BlogHeader;