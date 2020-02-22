import { createUseStyles } from 'react-jss';
import colors from '../colors';



const searchBarStyles = createUseStyles({
    wrapper: {
        position: 'relative',
        flexGrow: '1',
        margin: '3px 0',
        padding: '0 15px',
        maxWidth: '33.3%',
        '& .show': {
            display: 'block',
            height: 'auto',
        },
    },
    filterNameWrapper: {
        display: 'flex',
        flexDirection: 'row',
        borderBottom: `1px solid ${colors.mint}`,
        backgroundColor: "#111",
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
        position: 'absolute',
        zIndex: '200',
        width: 'calc(100% - 30px)',
        height: '0',
        display: 'none',
        backgroundColor: "#111",
        '& .active': {
            color: `${colors.lightMint}`,
            fontWeight: 'bold'
        }
    },

    activeFilters: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        margin: '4px'
    },
    filterElementWrapper: {
        margin: '2px'
    },
    filterElement: {
        display: 'inline-block',
        padding: {
            top: '4px',
            bottom: '4px'
        }, 
        backgroundColor: '#111',
        color: `${colors.mint}`,
        verticalAlign: 'top',
    },

    roundedEdges: {
        width: '22px',
        backgroundColor: '#111',
        display: 'inline-block',
        height: '100%',
        verticalAlign: 'top',
        textAlign: 'center',
        position: 'relative',
        '& svg': {
            display: 'inline-block',
            width: '12px',
            height: '12px',
            position: 'absolute',
            top: '50%',
            left: '15%',
            marginTop: '-6px',
            transition: '.3s ease-in',
            '&:hover': {
                color: `${colors.lightMint}`,
                cursor: 'pointer'
            }
        }
    },

    leftRounded: {
        borderTopLeftRadius: '100%',
        borderBottomLeftRadius: '100%',
        width: '18px'
    },

    rightRounded: {
        borderTopRightRadius: '100%',
        borderBottomRightRadius: '100%'
    },

    '@media (max-width: 1150px)': {
        wrapper: {
            maxWidth: '100%',
            minWidth: '50%',
            padding: '0 10px'
        }
    },

    '@media (max-width: 740px)': {
        wrapper: {
            minWidth: '100%',
            padding: '0 15px'
        }
    },

    '@media (max-width: 530px)': {
        wrapper: {
            margin: {
                top: '8px',
                right: '0',
                bottom: '8px',
                left: '0'
            }
        }
    },
});

export default searchBarStyles;