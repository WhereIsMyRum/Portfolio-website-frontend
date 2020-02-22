import copyrightFooterStyles from '../jss-styles/copyrightFooter';


const CopyrightFooter = (props) => {
    const classes = copyrightFooterStyles();
    return (
        <div className={classes.footer}>
            <p className={classes.name}>Piotr Polcik</p>
            <p>&copy; January 2020</p>
        </div>

    )
};
//<p>&copy; {props.content.place} {props.content.date}</p>

export default CopyrightFooter;