import { useEffect } from 'react';
import nextCookies from 'next-cookies';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';

import Layout from '../components/layout';
import { fadeOutElement } from  '../utils/utils';
import BlogContent from '../components/blog/blogContent';
import PostsOverview from  '../components/blog/postsOverview';
import CopyrightFooter from '../components/copyrightFooter';


const Blog = (props) => {
    if (props.error) return <Error statusCode={props.error} />

    const content = require(`../config/content-${props.lang}.json`);
    const layout = require('../config/layout-blog.json');

    useEffect(() => {
        const loader = document.getElementById('loader');
        fadeOutElement(loader);
    }, []);

    return (
        <Layout navbar={layout.navbar} og={layout.og} content={content.layout}>
            <div id="blog">
                <BlogContent data={props.data} blog={content.blog} social={content.layout.social}/>
            </div>
            <CopyrightFooter styling={layout.footer}/>
        </Layout>
    );
}

Blog.getInitialProps = async (ctx) => {
    let { lang } = nextCookies(ctx);
    lang = lang ? lang : "en";

    let res;
    if (process.browser) {
        res = await fetch('/api/blog/posts');
    } else {
        res = await fetch('http://backend:8080/api/blog/posts');
    };

    const og = {
        title: 'A Wee Bit Dev Blog',
        url: process.browser ? 
                window.location.protocol + '://' + window.location.hostname + '/blog'
                : process.env.ROOT_URL + '/blog',
        image: process.browser ? 
                    window.location.protocol + '://' + window.location.hostname + '/static/images/weebitdev.png'
                    : process.env.ROOT_URL + '/static/images/weebitdev.png'
    };

    if (res.status  === 200) {
        const data = await res.json();
        return {
            'data': data,
            'og': og,
            'lang': lang
        };
    }

    return {'error': 500};

    
};

export default Blog;
