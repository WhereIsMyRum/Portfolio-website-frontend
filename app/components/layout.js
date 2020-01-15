import { JssProvider } from 'react-jss';
import Head from 'next/head';

import Navbar from './navbar';
import Loader from './loader'

const Layout = (props) => {
    return (
        <JssProvider id={{ minify: true }}>
            <Head>
                <title>{props.content.meta.title}</title>
                <meta charSet="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="theme-color" content="#ffffff"></meta>
                <meta name="description" content={props.content.meta.description}></meta>
                <meta property="og:image" content="https://piotrpolcik.pl/static/images/me_bw.jpg" />
                <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"></link>
                <link rel="stylesheet" href="/static/styles/styles.css"></link>
                <link rel="shortcut icon" type="image/png" href="/static/images/Logo_light.png" />
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js" />
            </Head>
            <div id="loader">
                <Loader />
            </div>
            <Navbar social={props.content.social} content={props.content.navbar} />
            <div className="container px-0 mx-0">
                {props.children}
            </div>
        </JssProvider>
    )
};

export default Layout;