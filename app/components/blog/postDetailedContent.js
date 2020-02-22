import postDetailedContentStyles from '../../jss-styles/blog/postDetailedContent';
import MarkdownIt from 'markdown-it';
import renderHTML from 'react-render-html';
import { useState, useEffect } from 'react';

import SubscribeForm from './subscribeForm';
import BlogPostShare from './blogPostShare';
import CommentForm from './commentForm';
import Comment from './comment';


const PostDetailedContent = (props) => {
    const classes = postDetailedContentStyles(props.colorScheme);
    const [ comments, setComments ] = useState([]);

    const md = new MarkdownIt({
        breaks: true
    }).use(require('markdown-it-div'));

    useEffect(() => {
        setComments(props.comments);
    }, [])

    return (
        <div className={classes.wrapper}>
            <div className={`${classes.postContent} offset-lg-2 col-lg-6 offset-md-2 col-md-8`}>
                {renderHTML(md.render(insertImages(props.text)))}
            </div>
            <div className={`${classes.leftColumn} offset-lg-0 col-lg-4 offset-md-2 col-md-8`} >
                <SubscribeForm colorScheme={props.colorScheme}/>
                <div className={classes.blogPostShare}>
                    <h5>Share</h5>
                    <BlogPostShare colorScheme={props.colorScheme} title={props.title}/>
                </div>
            </div>
            <div className={`${classes.commentForm} offset-lg-2 col-lg-6 offset-md-2 col-md-8`}>
                <CommentForm colorScheme={props.colorScheme} title={props.title} setComments={setComments}/>
            </div>
            <div className={` ${classes.commentsWrapper} offset-lg-2 col-lg-6 offset-md-2 col-md-8`}>
                <h5>Comments</h5>
                { comments.map( comment => {
                    return <Comment key={comment._id} data={comment} colorScheme={props.colorScheme}/>
                })}
            </div>
        </div>
    );
};
export default PostDetailedContent;