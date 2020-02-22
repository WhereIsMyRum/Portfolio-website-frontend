import { createUseStyles } from 'react-jss';
import  colors from '../colors';


const postsOverviewStyles = createUseStyles({
    wrapper: {
        width: '85vw',
        backgroundColor: "#171717",
        boxShadow: '11px 11px 6px -6px rgba(0,0,0,0.4)',
        minHeight: '100vh',
        margin: '0 auto',
        padding: {
            top: '30px',
            right: '30px',
            bottom: '30px',
            left: '30px'
        },
        display: 'flex',
        flexDirection: 'column',
    },

    filtersWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '0'
    },

    postsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: '30px 0 10px',
        minWidth: '80%'
    },

    buttonWrapper: {
        width: '90%',
        margin: '0 auto'
    },

    clearButton: {
        backgroundColor: "#111",
        border: 'none',
        color: `${colors.mint}`,
        padding:  '10px',
        transition: '.3s ease-in',
        '&:hover': {
            color: `${colors.lightMint}`
        }
    },

    '@media (max-width: 1150px)': {
        wrapper: {
            padding: {
                top: '30px',
                right: '20px',
                bottom: '30px',
                left: '20px'
            },
        }
    },
});

export default postsOverviewStyles;