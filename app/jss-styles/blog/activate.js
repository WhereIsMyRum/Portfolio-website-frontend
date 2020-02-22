import { createUseStyles } from 'react-jss';
import colors from '../colors';


const activateStyles = createUseStyles({
    wrapper: {
        width: '100vw',
        minHeight: '86vh',
        backgroundColor: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    continueWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        minWidth: '100px',
        '& a': {
            backgroundColor: colors.wrapperBlack,
            padding: '12px',
            margin: '5px',
            color: colors.mint,
            transition: '.3s ease-in',
            boxShadow: '7px 7px 6px -6px rgba(0,0,0,0.4)',
            '&:hover': {
                color: colors.lightMint
            }
        }
    }
});

export default activateStyles;