import { useEffect } from 'react';
import cookie from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import languageSelectorStyles from '../jss-styles/languageSelector';


const LanguageSelector = (props) => {
    const classes = languageSelectorStyles();

    useEffect(() => {
        const lang = cookie.get('lang');
        if (!lang) {
            setCookie('en');
        }
    })

    const setCookieAndReload = (lang) => {
        if (cookie.get('lang') !== lang) {
            setCookie(lang);
            window.location.href = "/";
        } else {
            props.close("close");
        }
    }

    const setCookie = (lang) => {
        cookie.set('lang', lang, {
            expires: new Date(new Date().getTime() + 60 * 60 * 1000)
        });
    }

    return (
        <div>
            <div className={classes.languageSelector} id="language">
                <div onClick={() => props.close("close")} className={classes.closeBtn}><FontAwesomeIcon icon={faTimes} /></div>
                <div className={classes.languageTiles}>
                    {
                        props.content.available.map((langObj) => {
                            const langKey = Object.keys(langObj)[0];
                            const lang = langObj[langKey];
                            return <div className={classes.language} key={langKey} onClick={() => setCookieAndReload(langKey)}>{lang}</div>
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default LanguageSelector;