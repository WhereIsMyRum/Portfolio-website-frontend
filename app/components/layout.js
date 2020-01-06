import Head from 'next/head';
import Navbar from './navbar';
import Loader from './loader'
import {JssProvider} from 'react-jss';
import layoutStyles from '../jss-styles/layout';

const Layout = (props) => {

    const classes = layoutStyles()
    return (
        <JssProvider id={{minify: true}}>
            <Head>
                <title>Piotr Połcik</title>
                <link rel="stylesheet" href="http://bootswatch.com/4/lux/bootstrap.min.css"></link>
                <link rel="stylesheet" href="/styles/styles.css"></link>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
            </Head>
            <style jsx global>{`
                a { 
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: none;
                }
                .navbar {
                    visibility: hidden
                }
                .logo {
                    visibility: hidden
                }
                #loader {
                    position: fixed;
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    z-index: 999;
                    background-color: #0c0c0c;
                }
            `}</style>
            <div  id="loader">
                <Loader />
            </div>
            <Navbar />
            <div className="container px-0 mx-0">
                {props.children}
            </div>
        </JssProvider>
    )
};

export default Layout;