import Layout from '../../components/layout';
import { useEffect } from 'react';
import nextCookies from 'next-cookies';
import Error from 'next/error';
import { fadeOutElement } from  '../../utils/utils';
import { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import CopyrightFooter from '../../components/copyrightFooter';

import Router from 'next/router'

import activateStyles from '../../jss-styles/blog/activate';



const ActivatePage = (props) => {
    const classes = activateStyles();
    if (props.error) return <Error statusCode={props.error} />

    const [message, setMessage] = useState("Subscription activated successfully");

    const content = require(`../../config/content-${props.lang}.json`);

    const sendActivationRequest = async (email, key) => {
        try {
            const res = await fetch('/api/blog/activate', {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, key})
            })
            res.status === 200 ? null : setMessage("Something went wrong. Please try again later.")
        } catch (error) {
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const loader = document.getElementById('loader');
        if (params.get('email') && params.get('key')) {
            sendActivationRequest(params.get('email'), params.get('key'))
            .then(() => {
                fadeOutElement(loader);
            })
        } else {
            Router.push('/blog');
        }
    }, []);

    return (
        <Layout navbarStyling={{socialDisplay: false, fixed: ''}} content={content.layout}>
            <div className={classes.wrapper}>
                {message}
                <div className={classes.continueWrapper}>
                    <a href="/blog">Go to blog</a>
                    <a href="/">Go to website</a>
                </div>
            </div>
            <CopyrightFooter />
        </Layout>
    );
};


ActivatePage.getInitialProps = async (ctx) => {
    let { lang } = nextCookies(ctx);
    lang = lang ? lang : "en";
    return {
        'lang': lang
    };
};

export default ActivatePage;