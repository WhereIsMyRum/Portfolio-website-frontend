import {createUseStyles} from 'react-jss';
import colors from './colors';

const globalStyles = createUseStyles({
    sectionHeader: {
        padding: {
            top: '85px',
            left: '85px'
        },
        '& h2': {
            color: colors.mint,
            marginBottom: '65px',
        },
        
    },

    paragraphStyling: {
        color: '#eee',
        '& p': {
            color: '#999'
        }
    },

    '@media (max-width: 320px)': {
        sectionHeader: {
            padding: {
                top: '85px',
                left: '60px'
            }
        }
    }
});

export default globalStyles;