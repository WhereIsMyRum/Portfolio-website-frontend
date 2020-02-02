import { createUseStyles } from 'react-jss';
import colors from '../colors';


const postThumbnailStyles = createUseStyles({
    wrapper: {
        maxWidth: '360px',
        height: 'auto',
        maxHeight: '400px',
        margin: {
            top: '15px',
            right: '15px',
            bottom: '15px',
            left: '15px'
        },
        backgroundColor: '#111',
        display: 'flex',
        flexDirection: 'column',
        '& img': {
            transition: 'transform .5s, filter 1.1s ease-in-out',
            filter: 'grayscale(100%)',
        },
        '&:hover': {
            '& img': {
                filter: 'grayscale(0%)',
                transform: 'scale(1.1)'
            }
        }
    },
    thumbnail: {
        width: '100%',
        height: 'auto'
    },
    imgHoverZoom: {
        height: 'auto',
        overflow: 'hidden'
    },
    summaryWrapper: {
        width: '100%',
        padding: '10px',
    },
    title: {
        color: `${colors.mint} !important`,
        textTransform: 'capitalize'
    },
    description: {

    },
    month: {

    },
    year: {

    },
    tagsWrapper: {

    },
    tag: {

    },

    '@media (max-width: 1050px)': {
        wrapper: {
            maxWidth: '283px'
        }
    },

    '@media (max-width: 860px)': {
        wrapper: {
            maxWidth: '360px'
        }
    }
});

export default postThumbnailStyles;