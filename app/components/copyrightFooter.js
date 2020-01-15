import copyrightFooterStyles from '../jss-styles/copyrightFooter';


const CopyrightFooter = (props) => {
    const classes = copyrightFooterStyles();
    return (
        <div className={classes.footer}>
            <p className={classes.name}>{props.content.text}</p>
            <p>&copy; {props.content.place} {props.content.date}</p>
        </div>

    )
};

export default CopyrightFooter;