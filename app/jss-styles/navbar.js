import {createUseStyles} from 'react-jss';
import colors from './colors';

const navbarStyles = createUseStyles({
    navbar: {
        visibility: 'visiblr',
        position: 'fixed',
        width: '100vw',
        zIndex:100,
        right: '-100%',
        backgroundColor: "#0a0a0a",
        opacity: "0.8",
    },

    navLink: {
        transition: '.3s ease-out'
    },


    socialMedia: {
        position: 'fixed',
        bottom: '20px',
        margin: '0 auto',
        width: '220px',
        height: '45px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '& svg': {
            height: '40px',
            width: '40px',
            color: colors.mint,
            transition: '.3s linear',
            '&:hover': {
                color: colors.lightMint,
                transform: 'rotateY(180deg)'
            }
        }
    },

    '@media (max-width: 1024px)': {
        navbar: {
            right:'0%'
        },

        socialMedia: {
            width: '200px',
            height: '36px',
            '& svg': {
                height: '35px',
                width: '35px'
            }
        }
    }
});

export default navbarStyles;