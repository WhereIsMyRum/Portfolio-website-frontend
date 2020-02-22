import commentStyles from '../../jss-styles/blog/comment';
import { formatDate } from '../../utils/utils';


const Comment = (props) => {
    const classes = commentStyles(props.colorScheme);
    const date = formatDate(props.data.date)
    return (
        <div className={classes.wrapper}>
            <div className={classes.nick} hover={props.data.nick}>{props.data.nick}</div>
            <div className={classes.date}>{date.day} {date.month} {date.year} at {date.time}</div>
            <div className={classes.text}>{props.data.text}</div>
        </div>
    );
};
export default Comment;