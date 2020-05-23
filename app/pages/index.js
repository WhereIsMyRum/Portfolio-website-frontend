import fetch from 'isomorphic-unfetch';
import nextCookies from 'next-cookies';
import Error from 'next/error';

import Layout from '../components/layout';
import CopyrightFooter from '../components/copyrightFooter';

import Home from '../components/top-level-components/home';
import About from '../components/top-level-components/about';
import Projects from '../components/top-level-components/projects';
import Contact from '../components/top-level-components/contact';


const Index = (props) => {
    if (props.error) return <Error statusCode={props.error} />

    const content = require(`../config/content-${props.lang}.json`);
    const layout = require('../config/layout-index.json');

    return (
        <Layout navbar={layout.navbar} og={layout.og} content={content.layout}>
            <Home menu={content.layout.navbar} content={content.home}  data={props.home}></Home>
            <About content={content.about} data={props.about}></About>
            <Projects content={content.projects} props={props.data}></Projects>
            <Contact content={content.contact}></Contact>
            <CopyrightFooter  styling={layout.footer}/>
        </Layout>
    );
};

Index.getInitialProps = async (ctx) => {
    let { lang } = nextCookies(ctx);
    lang = lang ? lang : "en";

    let res;
    if (process.browser) {
        res = await fetch('/api/projects', {headers: {cookie: `lang=${lang}`}});
    } else {
        res = await fetch('http://backend:8080/api/projects',  {headers: {cookie: `lang=${lang}`}});
    }
    
    const supportsWebP = ctx.req.headers.accept.match('image/webp');
    if (res.status === 200) {
        const data = await res.json();
        return {
            'data': data,
            'home': {
                bg: supportsWebP ? '/static/images/bg_full.webp' : '/static/images/bg_full.jpg',
                bgMoving: supportsWebP ? '/static/images/bg_bt_trans.webp' : '/static/images/bg_bt_trans.png'
            },
            'about': {
                img: supportsWebP ? '/static/images/me_bw.webp' : '/static/images/me_bw.jpg'
            },
            'lang': lang
        };
    }

    return {'error': 500};


};

export default Index;