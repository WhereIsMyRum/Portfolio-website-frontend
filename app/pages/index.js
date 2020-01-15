import Layout from '../components/layout';
import Home from '../components/home';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';
import fetch from 'isomorphic-unfetch';
import nextCookies from 'next-cookies';


const Index = (props) => {
    const content = require(`../config/content-${props.lang}.json`);

    return (
        <Layout content={content.layout}>
            <Home content={content.home}></Home>
            <About content={content.about}></About>
            <Projects content={content.projects} props={props.data}></Projects>
            <Contact content={content.contact}></Contact>
            <script src="/static/scripts/script.js"></script>
        </Layout>
    );
};

Index.getInitialProps = async (ctx) => {
    const res = await fetch('http://backend:8080/api/projects')
    const data = await res.json();
    const { lang } = nextCookies(ctx);


    return {
        'data': data,
        'lang': lang ? lang : "en"
    };
};

export default Index;