import { createUseStyles } from 'react-jss';
import colors from '../colors';


const homeStyles = createUseStyles({
    wrapper: {
        width: '100vw',
        height: '100vh',
        background: {
            image: 'url("/static/images/bg_full.jpg")',
            color: '#000',
            position: 'center 0',
            repeat: 'no-repeat',
            size: 'cover',
            attachment: 'fixed'
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    parallaxImg: {
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        zIndex: 2,
        background: {
            image: 'url("/static/images/bg_bt_trans.png")',
            position: 'center 0',
            repeat: 'no-repeat',
            size: 'cover',
            color: 'transparent'
        }
    },

    breakFix: {
        width: '100vw',
        height: '10vh',
        backgroundColor: 'black',
        position: 'relative',
        top: '95vh'
    },

    introduction: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: '2.4em',
        textAlign: 'center',
        paddingRight: '1vw',
        position: 'fixed',
        zIndex: '0'
    },

    jumbotron: {
        backgroundColor: 'transparent'
    },

    introTxt: {
        margin: 0,
        color: colors.white
    },

    standingOutTxt: {
        color: colors.mint,
        fontSize: '2.5rem'
    },

    logo: {
        visibility: 'visible',
        position: 'fixed',
        height: '80px',
        width: '80px',
        top: '2vw',
        left: '2vw',
    },

    logo2: {
        zIndex: 11,
        opacity: 0,
        height: '80px',
        width: '80px',
        transition: '.3s ease-in',
        '&:hover': {
            opacity: 1,
        }
    },

    '@media (max-width: 1024px)': {
        logo: {
            top: '65px',
            left: '20px'
        }
    },



    '@media (max-width: 640px)': {
        logo: {
            width: '60px',
            height: '60px'
        }
    },

    '@media (min-width: 2000px)': {
        introduction: {
            fontSize: '2.7rem'
        }
    }
});

export default homeStyles;