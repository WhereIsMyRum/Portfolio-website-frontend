import Layout from '../../components/layout';
import { useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import nextCookies from 'next-cookies';
import Error from 'next/error';
import { fadeOutElement } from  '../../utils/utils';
import CopyrightFooter from '../../components/copyrightFooter';
import PostDetailedContent from '../../components/blog/postDetailedContent';
import PostDetailedHeader from '../../components/blog/postDetailedHeader';
import { getColorScheme } from '../../utils/utils';




const BlogPost = (props) => {
    if (props.error) return <Error statusCode={props.error} />

    const content = require(`../../config/content-${props.lang}.json`);


    useEffect(() => {
        const loader = document.getElementById('loader');
        fadeOutElement(loader);
    }, []);

    return (
        <Layout navbarStyling={{socialDisplay: false, fixed: ''}} content={content.layout}>
            <div id="blog">
                <PostDetailedHeader title={props.data.title} thumb={props.data.thumb} created={props.data.created} colorScheme={getColorScheme(props.data.colorScheme)} />
                <PostDetailedContent title={props.data.title} text={props.data.fullText} images={props.data.images} colorScheme={getColorScheme(props.data.colorScheme)} comments={props.data.comments}/>
            </div>
            <CopyrightFooter />
        </Layout>
    );
};


BlogPost.getInitialProps = async (ctx) => {
    let { lang } = nextCookies(ctx);
    lang = lang ? lang : "en";

    let res;
    if (process.browser) {
        res = await fetch(`/api/blog/posts/${ctx.query.title}`, {headers: {cookie: `lang=${lang}`}});
    } else {
        res = await fetch(`http://backend:8080/api/blog/posts/${ctx.query.title}`, {headers: {cookie: `lang=${lang}`}})
    }

    if (res.status === 200) {
        const data = await res.json();
        return {
            'data': data,
            'lang': lang
        };
    }


    return {'error': res.status};


};

export default BlogPost;