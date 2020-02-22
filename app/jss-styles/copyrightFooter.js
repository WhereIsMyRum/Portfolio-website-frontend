import { createUseStyles } from 'react-jss';
import colors from './colors';


const copyrightFooterStyles = createUseStyles({
    footer: {
        color: colors.mint,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        bottom: 0,
        fontSize: '11px',
        backgroundColor: "#151515",
        width:'100vw',
        height: '32px',
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