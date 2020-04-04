import { useEffect } from 'react';

import ContactForm from '../building-blocks/contactForm';
import ContactTile from '../building-blocks/contactTile';

import { fadeOutElement } from  '../../utils/utils';

import globalStyles from '../../jss-styles/global';
import contactStyles from '../../jss-styles/top-level-components/contact'



const Contact = (props) => {
    const globalClasses = globalStyles();
    const classes = contactStyles();

    useEffect(() => {
        const loader = document.getElementById('loader');
        fadeOutElement(loader);
    }, []);

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
    </div>)
};


export default Contact;