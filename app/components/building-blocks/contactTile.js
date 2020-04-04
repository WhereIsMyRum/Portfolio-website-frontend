import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { contactTileStyles } from '../../jss-styles/building-blocks/contactTile'


const ContactTile = (props) => {
    const classes = contactTileStyles();
    const icons = {
        "faPhone": faPhone,
        "faEnvelope": faEnvelope
    }
    return (
        <div className={classes.contactTile} onClick={eval(props.onClickAction)}>
            <div className={classes.contactTileHeader}>
                <h5 className={classes.text}>{props.title}</h5>
                <FontAwesomeIcon icon={icons[props.icon]} />
            </div>
            <p>{props.text}</p>
        </div>
    );
};

export default ContactTile;