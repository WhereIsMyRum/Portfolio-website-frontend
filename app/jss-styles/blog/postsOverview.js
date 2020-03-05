import { createUseStyles } from 'react-jss';
import  colors from '../colors';


const postsOverviewStyles = createUseStyles({
    wrapper: {
        minHeight: '100vh',
        margin: '0 auto',
        padding: {
            top: '50px',
            right: '30px',
            bottom: '30px',
            left: '30px'
        },
        display: 'flex',
        flexDirection: 'column',
        '& h2': {
            color: colors.mint,
            paddingLeft: '30px',
            fontFamily: 'NeonTubes',
            fontSize: '2.3rem'
        }
    },

    rightColumn: {
        paddingTop: '30px'
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