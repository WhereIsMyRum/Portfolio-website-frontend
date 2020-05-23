import copyrightFooterStyles from '../jss-styles/copyrightFooter';


const CopyrightFooter = (props) => {
    const classes = copyrightFooterStyles(props.styling);
    return (
        <div className={classes.footer}>
            <p className={classes.name}>Piotr Połcik</p>
            <p>&copy; January 2020</p>
        </div>
    )
};

export default CopyrightFooter;