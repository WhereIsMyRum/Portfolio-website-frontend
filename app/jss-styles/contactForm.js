import {createUseStyles} from 'react-jss';
import colors from './colors';


const contactFormStyles = createUseStyles({
    formWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: '640px',
        margin: {
            left: 'auto',
            right: 'auto',
            top: '20px',
            bottom: '20px'
        }
    },
    generalInput: {
        backgroundColor: "#0d0d0d",
        color: `${colors.lightMint}`,
        border: 'none',
        '&::placeholder': {
            color: `${colors.mint}`
        },
        '&::focus': {
            boxShadow: 'none',
            border: `1px solid ${colors.lightMint}`
        },
        padding: '4px',
    },
    textField: {
        width: 'calc(100% - 32px)',
        margin: {
            left: '15px',
            right: '15px',
            top:'1px'
        }
    },
    subject: {
        width: 'calc(100% - 32px)',
        margin: {
            left: '15px',
            right: '15px',
            top:'1px',
            bottom: '1px'
        }
    },
    name: {
        width: 'calc(50% - 17px)',
        margin: {
            left: '15px',
            right: '1px',
            bottom:'1px'
        }
    },
    email: {
        width: 'calc(50% - 17px)',
        margin: {
            left: '1px',
            right: '15px',
            bottom:'1px'
        }
    },
    submit: {
        color: `${colors.mint} !important`,
        padding: '7px',
        transition: '.2s linear',
        margin: {
            left: '15px'
        },
        '&:hover': {
            color: `${colors.lightMint} !important`
        }
    },
    message: {
        margin: {
            top: '100px'
        },
        width: '100%',
        textAlign: 'center'
    },
    error: {
        color: '#BD2030',
        margin: {
            bottom: '20px'
        }
    },
    honey: {
        visibility: 'hidden'
    },
    '@media (max-width: 480px)': {
        name: {
            width: 'calc(100% - 32px)',
            margin: {
                left: '15px',
                right: '15px',
                bottom: '1px'
            }
        },
        email: {
            width: 'calc(100% - 32px)',
            margin: {
                left: '15px',
                right: '15px',
                top:'1px',
                bottom: '1px'
            }
        }
    },
})

export default contactFormStyles;
