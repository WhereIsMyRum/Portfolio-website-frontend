import { useEffect } from 'react';
import nextCookies from 'next-cookies';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';

import Layout from '../components/layout';
import { fadeOutElement } from  '../utils/utils';
import BlogContent from '../components/blog/blogContent';
import PostsOverview from  '../components/blog/postsOverview';


const Blog = (props) => {
    if (props.error) return <Error statusCode={props.error} />
    const content = require(`../config/content-${props.lang}.json`);

    useEffect(() => {
        const loader = document.getElementById('loader');
        fadeOutElement(loader);
    }, []);

    return (
        <Layout navbarStyling={{socialDisplay: false, fixed: ''}} content={content.layout}>
            <div id="blog">
                <BlogContent data={props.data} blog={content.blog} social={content.layout.social}/>
            </div>
        </Layout>
    );
}

Blog.getInitialProps = async (ctx) => {
    let { lang } = nextCookies(ctx);
    lang = lang ? lang : "en";

    let res;
    if (process.browser) {
        res = await fetch('http://frontend.docker/api/blog/posts');
    } else {
        res = await fetch('http://backend:8080/api/blog/posts');
    }

    if (res.status === 200) {
        const data = await res.json();
        return {
            'data': data,
            'lang': lang
        };
    }

    return {'error': 500};

    
};

export default Blog;
