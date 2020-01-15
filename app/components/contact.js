import globalStyles from '../jss-styles/global';
import contactStyles from '../jss-styles/contact'

import CopyrightFooter from '../components/copyrightFooter';
import ContactForm from '../components/contactForm';
import ContactTile from '../components/contactTile';



const Contact = (props) => {
    const globalClasses = globalStyles();
    const classes = contactStyles();

    return (<div id="contact" className={`${classes.contact}`}>
        <div className={globalClasses.sectionHeader}>
            <h2>{props.content.title}</h2>
        </div>
        <div className={`${classes.contactForm} ${globalClasses.contentWrapper}`}>
            <ContactForm content={props.content.contactForm} />
        </div>
        <div className={classes.orDivider}>
            <p>{props.content.sectionDividerText}</p>
        </div>
        <div className={classes.contactList}>
            {
                props.content.contactTiles.tiles.map(tile => {
                    return <ContactTile key={tile.title} {...tile} />
                })}
        </div>
        <CopyrightFooter content={props.content.copyright} />
    </div>)
};


export default Contact;