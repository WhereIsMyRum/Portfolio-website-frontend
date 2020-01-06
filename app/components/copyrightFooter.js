import copyrightFooterStyles from '../jss-styles/copyrightFooter';

const CopyrightFooter = () => {
    const classes = copyrightFooterStyles();
    return (
        <div className={classes.footer}>
            <p className={classes.name}>Piotr Połcik</p>
            <p>&copy; December 2019</p>
        </div>

)};

export default CopyrightFooter;