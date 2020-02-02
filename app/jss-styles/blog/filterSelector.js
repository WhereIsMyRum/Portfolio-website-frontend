import { createUseStyles } from 'react-jss';
import colors from '../colors';



const searchBarStyles = createUseStyles({
    wrapper: {
        width: '90%',
        height: 'auto',
        backgroundColor: "#111",
        margin: {
            top: '15px',
            right: 'auto',
            bottom: '15px',
            left: 'auto',
        },
        '& .show': {
            display: 'block',
            height: 'auto',
        },
    },
    filterNameWrapper: {
        display: 'flex',
        flexDirection: 'row',
        borderBottom: `1px solid ${colors.mint}`,
        padding: {
            top: '8px',
            right: '10px',
            bottom: '3px',
            left: '10px',
        },
        '&:hover': {
            cursor: 'pointer',
            '& svg': {
                color: `${colors.lightMint}`
            },
            '& h5': {
                color: `${colors.lightMint} !important`
            }
        }
    },

    arrowDown: {
        margin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 'auto'
        },
        '& svg': {
            color: `${colors.mint}`,
            transition: '.3s ease-in',
            width: '16px',
            height: '16px'
        }
    },
    filterName: {
        display: 'inline',
        fontSize: '0.9rem',
        transition: '.3s ease-in',
        color: `${colors.mint} !important`,
        textTransform: 'capitalize',
        marginBottom: '0',
    },
    filterValue: {
        padding: {
            top: '5px',
            right: '10px',
            bottom: '5px',
            left: '18px'
        },
        transition: '.3s ease-in',
        '&:hover': {
            cursor: 'pointer',
            color: `${colors.lightMint}`
        }
    },
    filtersBox: {
        height: '0',
        display: 'none',
        '& .active': {
            color: `${colors.lightMint}`,
            fontWeight: 'bold'
        }
    }
});

export default searchBarStyles;