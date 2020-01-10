import copyrightFooterStyles from '../jss-styles/copyrightFooter';

import content from '../config/content';


const CopyrightFooter = () => {
    const classes = copyrightFooterStyles();
    return (
        <div className={classes.footer}>
            <p className={classes.name}>{content.copyright.text}</p>
            <p>&copy; {content.copyright.place} {content.copyright.date}</p>
        </div>

    )
};

export default CopyrightFooter;