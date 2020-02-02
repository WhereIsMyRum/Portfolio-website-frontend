import { createUseStyles } from 'react-jss';
import  colors from '../colors';


const postsOverviewStyles = createUseStyles({
    wrapper: {
        width: '80vw',
        backgroundColor: "#171717",
        minHeight: '100vh',
        margin: '0 auto',
        padding: '30px',
        display: 'flex',
        flexDirection: 'row-reverse',
        flexWrap: 'wrap'
    },

    postsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '1170px',
        margin: '0 auto',
        alignContent: 'flex-start',
    },

    rightColumn: {
        flexGrow: '1',
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

    '@media (max-width: 1540px)' : {
        postsWrapper: {
            width: '780px'
        }
    },

    '@media (max-width: 1050px)' : {
        postsWrapper: {
            width: '626px'
        }
    },

    '@media (max-width: 860px)' : {
        postsWrapper: {
            width: '390px'
        }
    },

    '@media (max-width: 600px)': {
        wrapper: {
            width: '90vw',
            padding: {
                left: '5px',
                right: '5px'
            }
        }
    },



    
});

export default postsOverviewStyles;