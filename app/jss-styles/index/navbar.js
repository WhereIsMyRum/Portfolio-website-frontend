import { createUseStyles } from 'react-jss';
import colors from '../colors';


const navbarStyles = createUseStyles({
    navbar: {
        visibility: 'visible',
        width: '100vw',
        height: '47px',
        zIndex: 100,
        backgroundColor: "#131313",
        opacity: "0.8",
        transition: '0.5s ease-out',
        marginBottom: '0 !important',
        top: '0',
    },


    navLink: {
        transition: '.3s ease-out',
        color: `${colors.mint} !important`,
        '&:hover': {
            cursor: 'pointer',
            color: `${colors.lightMint} !important`
        }
    },


    socialMedia: {
        position: 'fixed',
        bottom: '20px',
        margin: '0 auto',
        width: '220px',
        height: '45px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 99,
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

    langSelect: {
        marginLeft: '35px',
    },

    '@media (max-width: 1024px)': {
        socialMedia: {
            width: '200px',
            height: '36px',
            '& svg': {
                height: '35px',
                width: '35px'
            }
        },
    },

    '@media (max-width: 770px)': {
        navbar: {
            right: '0%'
        },
        langSelect: {
            marginLeft: '0',
            marginTop: '15px'
        }
    },

    '@media (min-width: 1024px)': {
        navLink: {
            fontSize: '1rem !important'
        }
    }
});

export default navbarStyles;