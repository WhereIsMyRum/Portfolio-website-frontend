import subscribeFormStyles from '../../jss-styles/blog/subscribeForm';
import contactFormStyles from '../../jss-styles/index/contactForm';
import fetch from 'isomorphic-unfetch';

import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from '../loader';


import useInput from '../../hooks/input-hook';
import { useState } from 'react';


const SubscribeForm = (props) => {
    const classes = subscribeFormStyles(props.colorScheme);
    const contactFormClasses = contactFormStyles();
    const {value: subscribe, bind: bindSubscribe, reset: resetSubscribe} = useInput('');
    const {value: honeysubscribe, bind: honeyBindSubscribe, reset: honeyBindReset} = useInput('');

    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const getPayload = () => {
        return {
            email: subscribe,
            honey: honeysubscribe
        }
    }

    const handleSubmit = async event => {
        event.preventDefault();
        setSubmitted(true);
        try {
            const res = await fetch('/api/blog/subscribe', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(getPayload())
            })
            res.status === 200 ? (setSuccess(true), setFailed(false), setSubmitted(false)) : (setFailed(true), setSubmitted(false));
            resetSubscribe();
            honeyBindReset();
        } catch (error) {
            resetSubscribe();
            honeyBindReset();
            setFailed(true)
        }

    }
    return (
        <div className={classes.wrapper}>
            <div  className={classes.innerWrapper}>
                <FontAwesomeIcon icon={faBell} />
                <div className={classes.headerWrapper}>
                    <h5>Subscribe</h5>
                    <p>And learn with me</p>
                </div>
            </div>
            {success && !failed && <div>Thanks</div>}
            {failed && <div>Error</div>}
    {submitted && !failed && !success && <div className={classes.loader}><Loader color={props.colorScheme.header}/></div>}
            {!success && !submitted && !failed &&
                <form onSubmit={handleSubmit}>
                    <input placeholder="E-mail" name="subscribeaighjk" required type="email" {...bindSubscribe} className={classes.subscribe} />
                    <input placeholder="Subscribe" name="subscribe" {...honeyBindSubscribe} className={contactFormClasses.honey} />
                    <input type="submit" value="Submit" className={classes.submitButton}/>
                </form>}
        </div>
    );
};
export default SubscribeForm;