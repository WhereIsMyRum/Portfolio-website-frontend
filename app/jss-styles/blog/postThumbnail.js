import { createUseStyles } from 'react-jss';
import colors from '../colors';


const postThumbnailStyles = createUseStyles({
    wrapper: {
        width: '33.3%',
        height: 'auto',
        maxHeight: '400px',
        color: '#55595c',
        padding: {
            top: '15px',
            right: '15px',
            bottom: '15px',
            left: '15px'
        },
        display: 'flex',
        flexDirection: 'column',
        '& img': {
            transition: 'transform .5s, filter 1.1s ease-in-out',
            filter: 'grayscale(100%)',
        },
        '&:hover': {
            color: '#55595c',
            '&> *': {
                boxShadow: '14px 10px 13px -4px rgba(0,0,0,0.4)',
            },
            '& img': {
                filter: 'grayscale(0%)',
                transform: 'scale(1.1)'
            }
        },
    },
    thumbnail: {
        width: '100%',
        height: 'auto'
    },
    imgHoverZoom: {
        height: 'auto',
        overflow: 'hidden',
        boxShadow: '7px 23px 6px -6px rgba(0,0,0,0.4)',
        transition: '.3s ease-in-out',
    },
    summaryWrapper: {
        backgroundColor: '#111',
        width: '100%',
        padding: '10px',
        boxShadow: '7px 7px 6px -6px rgba(0,0,0,0.4)',
        transition: '.3s ease-in-out',
        textAlign: 'center',
        '& p': {
            marginBottom: '4px',
            fontSize: '0.8rem',
            color: props =>`${props.paragraph} !important`,
        },
        '& h3': {
            fontSize: '1.3rem',
            color: props => `${props.header}`
        }
    },
    title: {
        color: props => `${props.header}`,
        textTransform: 'none',
        fontSize: '1.3rem',
    },
    description: {

    },
    month: {
        color: props =>`${props.header}`
    },
    year: {

    },
    tagsWrapper: {

    },
    tag: {

    },

    '@media (max-width: 1150px)': {
        wrapper: {
            width: '50%',
            padding: {
                top: '15px',
                right: '10px',
                bottom: '10px',
                left: '15px'
            },
        }
    },

    '@media (max-width: 740px)': {
        wrapper: {
            width: '100%',
            padding: {
                top: '15px',
                right: '15px',
                bottom: '15px',
                left: '15px'
            },
        }
    }
});

export default postThumbnailStyles;