import commentFormStyles from '../../jss-styles/blog/commentForm';
import fetch from 'isomorphic-unfetch';
import Loader from '../loader';


import useInput from '../../hooks/input-hook';
import { useState } from 'react';


const SubscribeForm = (props) => {
    const classes = commentFormStyles(props.colorScheme);

    const {value: nick, bind: bindNick, reset: resetNick} = useInput('');
    const {value: text, bind: bindText, reset: resetText} = useInput('');

    const {value: honeyNick, bind: honeyBindNick, reset: honeyResetNick} = useInput('');
    const {value: honeyText, bind: honeyBindText, reset: honeyResetText} = useInput('');


    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const getPayload = () => {
        return {
            nick: nick ? nick : "Anonymous",
            text: text,
            honeynick: honeyNick,
            honeytext: honeyText
        }
    };

    const resetForm = () => {
        resetNick();
        honeyResetNick();
        resetText();
        honeyResetText();
    };

    const handleSubmit = async event => {
        event.preventDefault();
        setSubmitted(true);
        try {
            const res = await fetch(`/api/blog/posts/${props.title}/comments`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(getPayload())
            })
            res.status === 200 ? (setSuccess(true), setFailed(false), setSubmitted(false)) : (setFailed(true), setSubmitted(false));
            resetForm();

            // update comments
            const comments = await res.json();
            props.setComments(comments);

            setFailed(false);
        } catch (error) {
            resetForm();
            setFailed(true)
        }

    }
    return (
            <div className={classes.wrapper}>
                {!submitted && failed && !success &&
                    <div>Something went wrong. Please try again later</div>
                }
                {!submitted && !failed && success &&
                    <h5>Thanks for leaving a comment!</h5>
                }
                {submitted && !failed && !success &&
                        <Loader />
                }
                {!submitted && !failed && !success &&
                <div >
                <h5>Liked the post? Leave a comment!</h5>
                <form onSubmit={handleSubmit} className={classes.formWrapper}>
                    <input placeholder="Nick" name="nickaighjk" type="text" {...bindNick} className={classes.input}/>
                    <textarea placeholder="Comment" name="commentaighjk" required {...bindText} rows="12" cols="50" className={classes.input}/>

                    <input type="submit" value="Submit" className={classes.submit}/>

                    <input placeholder="Nick" name="nick" {...honeyBindNick}  tabIndex="-1" autoComplete="off" className={classes.honey}></input>
                    <textarea placeholder="Comment" name="commentaighjk" rows="1" cols="10" {...honeyBindText} tabIndex="-1" autoComplete="off" className={classes.honey}></textarea>
                </form>
                </div>}
            </div>
    );
};
export default SubscribeForm;