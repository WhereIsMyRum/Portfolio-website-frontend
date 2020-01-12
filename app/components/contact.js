import globalStyles from '../jss-styles/global';
import contactStyles from '../jss-styles/contact'

import CopyrightFooter from '../components/copyrightFooter';
import ContactForm from '../components/contactForm';
import ContactTile from '../components/contactTile';

import content from '../config/content.json';

import dynamic from 'next/dynamic';


const Contact = () => {
    const globalClasses = globalStyles();
    const classes = contactStyles();

    return (<div id="contact" className={`${classes.contact}`}>
        <div className={globalClasses.sectionHeader}>
            <h2>{content.contact.title}</h2>
        </div>
        <div className={`${classes.contactForm} ${globalClasses.contentWrapper}`}>
            <ContactForm />
        </div>
        <div className={classes.orDivider}>
            <p>or if you prefer</p>
        </div>
        <div className={classes.contactList}>
            {
                content.contactTiles.tiles.map( tile => {
                    return <ContactTile key={tile.title} {...tile} />
            })}
        </div>
        <CopyrightFooter />
    </div>)
};


export default Contact;