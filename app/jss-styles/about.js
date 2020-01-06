import {createUseStyles} from 'react-jss';
import colors from './colors';
import { relative } from 'path';

const aboutStyles = createUseStyles({
    about: {
        width: '100vw',
        height: 'auto',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, rgba(0,0,0,1) 10%, rgba(10,10,10,1) 30%)',
        zIndex: 10,
        position: 'relative'
    },

    fullPageCenter: {
        width: '100vw',
        height: 'auto',
        margin: {
            left:0,
            right:0
        }
    },

    myPhoto: {
        boxShadow: '0 0 15px 1px rgba(0,0,0,1)',
        margin : {
            left: 'auto',
            right: 'auto'
        },
        width: '230px',
        height: 'auto',
        alignSelf: 'center'
    },

    '@media (max-width: 770px)': {
        myPhoto: {
            width: '190px',
        }
    }
});

export default aboutStyles;