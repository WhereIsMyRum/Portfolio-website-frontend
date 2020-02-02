import { createUseStyles } from 'react-jss';
import colors from '../colors';


const blogHeaderStyles = createUseStyles({
    contentWrapper: {
        backgroundColor: '#111',
        width: '100vw',
        padding: {
            top: '60px',
            bottom: '60px'
        }
    },

    socialMedia: {
        margin: {
            right: 'auto',
            left: 'auto',
            top: 0,
            bottom: '30px'
        },
        width: '140px',
        height: '30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '& svg': {
            height: '22px',
            width: '22px',
            color: colors.mint,
            transition: '.3s linear',
            '&:hover': {
                color: colors.lightMint,
                transform: 'rotateY(180deg)'
            }
        }
    },

    header: {
        margin: {
            top: '30px',
            right: 'auto',
            bottom: '70px',
            left: 'auto',
        },
        textAlign: 'center',
        '& h1': {
            marginBottom: '0',
            color: `${colors.mint} !important`,
        },
        '& p': {
            fontSize: '1.1rem',
        }
    }
});

export default blogHeaderStyles;