import Layout from '../components/layout';
import Home from '../components/index/home';
import About from '../components/index/about';
import Projects from '../components/index/projects';
import Contact from '../components/index/contact';
import fetch from 'isomorphic-unfetch';
import nextCookies from 'next-cookies';
import Error from 'next/error';
import CopyrightFooter from '../components/copyrightFooter';


const Index = (props) => {
    if (props.error) return <Error statusCode={props.error} />

    const content = require(`../config/content-${props.lang}.json`);
    const layout = require('../config/layout-index.json');

    return (
        <Layout navbar={layout.navbar} og={layout.og} content={content.layout}>
            <Home content={content.home}></Home>
            <About content={content.about}></About>
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

    if (res.status === 200) {
        const data = await res.json();
        return {
            'data': data,
            'lang': lang
        };
    }

    return {'error': 500};


};

export default Index;