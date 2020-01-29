import { useEffect } from 'react';
import nextCookies from 'next-cookies';

import Layout from '../components/layout';
import { fadeOutElement } from  '../utils/utils';
import BlogHeader from '../components/blog/blogHeader';


const Blog = (props) => {
    const content = require(`../config/content-${props.lang}.json`);

    useEffect(() => {
        const loader = document.getElementById('loader');
        fadeOutElement(loader);
    }, []);

    return (
        <Layout content={content.layout}>
            <div id="blog">
                <BlogHeader />
            </div>
        </Layout>
    );
}

Blog.getInitialProps = async (ctx) => {
    let { lang } = nextCookies(ctx);
    lang = lang ? lang : "en";

    return {
        'lang': lang
    };
};

export default Blog;
