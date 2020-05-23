import { useState } from 'react';
import fetch from 'isomorphic-unfetch';

import Loader from '../loader';

import useInput from '../../hooks/input-hook';

import contactFormStyles from '../../jss-styles/building-blocks/contactForm';



const ContactForm = (props) => {
    const { value: name, bind: bindName, reset: resetName } = useInput('');
    const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
    const { value: subject, bind: bindSubject, reset: resetSubject } = useInput('');
    const { value: text, bind: bindText, reset: resetText } = useInput('');

    const { value: honeyname, bind: honeyBindName, reset: resetHoneyName } = useInput('');
    const { value: honeyemail, bind: honeyBindEmail, reset: resetHoneyEmail } = useInput('');
    const { value: honeysubject, bind: honeyBindSubject, reset: resetHoneySubject } = useInput('');
    const { value: honeytext, bind: honeyBindText, reset: resetHoneyText } = useInput('');

    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const classes = contactFormStyles();

    const handleSubmit = async event => {
        event.preventDefault();
        setSubmitted(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(getPayload())
            })
            res.status === 200 ? (setSuccess(true), setFailed(false), setSubmitted(false)) : (setFailed(true), setSubmitted(false));
            resetAll();
        } catch (error) {
            resetAll();
            setFailed(true);
        }
    }

    const resetAll = () => {
        resetName();
        resetEmail();
        resetSubject();
        resetText();
    }

    const getPayload = () => {
        return {
            name,
            email,
            subject,
            text,
            honeyname,
            honeyemail,
            honeysubject,
            honeytext
        }
    }

    return (
        <div className={classes.formWrapper}>
            {success && !failed && <div className={classes.message}>{props.content.thankYouMessage}</div>}
            {failed && <div className={`${classes.message} ${classes.error}`}>{props.content.errorMessage}</div>}
            {submitted && !failed && !success && <div className={classes.message}><Loader /></div>}
            {!success && !submitted &&
                <form aria-label="contact form" onSubmit={handleSubmit}>
                    <input aria-label={props.content.namePlaceholder} placeholder={props.content.namePlaceholder} name="nameaighjk" required type="text" {...bindName} className={`${classes.generalInput} ${classes.name}`}></input>
                    <input aria-label={props.content.emailPlaceholder} placeholder={props.content.emailPlaceholder} name="emailaighjk" required type="email" {...bindEmail} className={`${classes.generalInput} ${classes.email}`}></input>
                    <input aria-label={props.content.subjectPlaceholder} placeholder={props.content.subjectPlaceholder} name="subjectaighjk" required type="text" {...bindSubject} className={`${classes.generalInput} ${classes.subject}`}></input>
                    <textarea aria-label={props.content.textPlaceholder} placeholder={props.content.textPlaceholder} name="messageaighjk" required rows="12" cols="50" {...bindText} className={`${classes.generalInput} ${classes.textField}`}></textarea>
                    <input aria-label={props.content.submitButton} type="submit" value={props.content.submitButton} className={`${classes.generalInput} ${classes.submit}`} />

                    <input placeholder="Name" name="name" {...honeyBindName} className={`${classes.honey}`} tabIndex="-1" autoComplete="off"></input>
                    <input placeholder="Email" name="email" {...honeyBindEmail} className={`${classes.honey}`} tabIndex="-1" autoComplete="off"></input>
                    <input placeholder="Subject" name="subject"  {...honeyBindSubject} className={`${classes.honey}`} tabIndex="-1" autoComplete="off"></input>
                    <textarea placeholder="Message" name="message" rows="1" cols="10" {...honeyBindText} className={`${classes.honey}`} tabIndex="-1" autoComplete="off"></textarea>
                </form>}
        </div>
    )
}

export default ContactForm;