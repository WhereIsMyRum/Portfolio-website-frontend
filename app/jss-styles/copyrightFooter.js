import { createUseStyles } from 'react-jss';
import colors from './colors';


const copyrightFooterStyles = createUseStyles({
    footer: {
        color: colors.mint,
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '11px',
        margin: {
            left: 'auto',
            right: 'auto'
        },
        '& p': {
            margin: {
                left: 'auto',
                right: 'auto'
            },
            padding: 0
        }
    },

    name: {
        color: '#444',
    }
});

export default copyrightFooterStyles;