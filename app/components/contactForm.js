import Loader from './loader';
import useInput from '../hooks/input-hook'
import { useState } from 'react';
import contactFormStyles from '../jss-styles/contactForm';
import fetch from 'isomorphic-unfetch';


const ContactForm = props => {
    const { value:name, bind:bindName, reset:resetName } = useInput('');
    const { value:email, bind:bindEmail, reset:resetEmail } = useInput('');
    const { value:subject, bind:bindSubject, reset:resetSubject } = useInput('');
    const { value:text, bind:bindText, reset:resetText } = useInput('');

    const { value:honeyname, bind:honeyBindName, reset:resetHoneyName } = useInput('');
    const { value:honeyemail, bind:honeyBindEmail, reset:resetHoneyEmail } = useInput('');
    const { value:honeysubject, bind:honeyBindSubject, reset:resetHoneySubject } = useInput('');
    const { value:honeytext, bind:honeyBindText, reset:resetHoneyText } = useInput('');

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
            console.log(res.status)
            res.status === 200 ? (setSuccess(true), setFailed(false), setSubmitted(false)) : (setFailed(true), setSubmitted(false));
            resetAll();
        } catch(error)  {
            console.log(error);
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
            { success && !failed && <div className={classes.message}>Thank you for sending a message!</div> }
            { failed && <div className={`${classes.message} ${classes.error}`}>Something went wrong. Please try again later.</div> }
            { submitted && !failed && !success && <div className={classes.message}><Loader/></div>}
            { !success && !submitted &&
            <form onSubmit={ handleSubmit } >
                <input placeholder="Name" name="nameaighjk" required type="text" {...bindName} className={`${classes.generalInput} ${classes.name}`}></input>
                <input placeholder="Email" name="emailaighjk" required type="email" {...bindEmail} className={`${classes.generalInput} ${classes.email}`}></input>
                <input placeholder="Subject" name="subjectaighjk" required type="text" {...bindSubject} className={`${classes.generalInput} ${classes.subject}`}></input>
                <textarea placeholder="Message" name="messageaighjk" required rows="12" cols="50" {...bindText} className={`${classes.generalInput} ${classes.textField}`}></textarea>
                <input type="submit" value="Submit" className={`${classes.generalInput} ${classes.submit}`}/>

                <input placeholder="Name" name="name" {...honeyBindName} className={`${classes.honey}`} tabIndex="-1" autoComplete="off"></input>
                <input placeholder="Email" name="email" {...honeyBindEmail} className={`${classes.honey}`} tabIndex="-1" autoComplete="off"></input>
                <input placeholder="Subject" name="subject"  {...honeyBindSubject} className={`${classes.honey}`} tabIndex="-1" autoComplete="off"></input>
                <textarea placeholder="Message" name="message"  rows="1" cols="10" {...honeyBindText} className={`${classes.honey}`} tabIndex="-1" autoComplete="off"></textarea>
            </form>}
        </div>
    )
}

export default ContactForm;