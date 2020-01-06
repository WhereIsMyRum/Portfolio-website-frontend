import Layout from '../components/layout';
import Home from './home';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import fetch from 'isomorphic-unfetch';

const Index = (props) => {
    return (
        <Layout>
            <Home></Home>
            <About></About>
            <Projects props={props.data}></Projects>
            <Contact></Contact>
            <script src="/scripts/script.js"></script>
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