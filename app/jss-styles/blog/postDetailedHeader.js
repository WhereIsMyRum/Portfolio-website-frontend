import { createUseStyles } from 'react-jss';
import colors from '../colors';

const postDetailedHeaderStyles = createUseStyles({
    wrapper: {
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '20px',
        alignItems: 'center',
        backgroundColor: props => `${props.background}`
    },

    title: {
        maxWidth:'50%',
        textAlign: 'center',
        padding: '10px 20px',
        '& h1': {
            textTransform: 'none',
            color: props => `${props.header}`
        },
        '& svg': {
            height: 'auto',
            width: '24px',
            color: props => `${props.header}`,
            transition: '.3s linear',
            margin: '5px 9px',
            '&:hover': {
                color: props => `${props.standOut}`,
            }
        }
    },

    imageWrapper: {
        padding: '10px 0'
    },

    image: {
        maxWidth:'100%',
        height: 'auto'
    },

    '@media (max-width: 1060px)': {
        title: {
            maxWidth: '70%'
        }
    },

    '@media (max-width: 720px)': {
        title: {
            maxWidth: '90%',
            padding: '10px 0',
        }
    },

    '@media (max-width: 580px)': {
        title: {
            '& h1': {
                fontSize: '1.5rem'
            }
        }
    }
});

export default postDetailedHeaderStyles;