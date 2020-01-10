import Layout from '../components/layout';
import Home from '../components/home';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';
import fetch from 'isomorphic-unfetch';


const Index = (props) => {
    return (
        <Layout>
            <Home></Home>
            <About></About>
            <Projects props={props.data}></Projects>
            <Contact></Contact>
            <script src="/static/scripts/script.js"></script>
        </Layout>
    );
};

Index.getInitialProps = async () => {
    const res = await fetch('http://backend:8080/api/projects')
    let data = await res.json();
    return {
        'data': data
    };
};

export default Index;