import { createUseStyles } from 'react-jss';
import colors from '../colors';

const subscribeFormStyles = createUseStyles({
    wrapper: {
        textAlign: 'center',
        padding: '14px',
        boxShadow: '7px 7px 6px -6px rgba(0,0,0,0.4)',
        width: '280px',
        height: '170px',
        margin: '5px',
        backgroundColor: props => props.background,
    },

    innerWrapper: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        '& svg': {
            position: 'absolute',
            top: '7px',
            left: '12px',
            width: '22px',
            height: 'auto',
            color: props => props.header,
        }
    },

    headerWrapper: {
        margin: '0 auto',
        '& h5': {
            color: props => props.header
        },
        '& p': {
            color: props => props.standOut
        },
    },

    loader: {
        '& div': {
            minHeight: 0
        }
    },

    subscribe: {
        padding: '4px',
        color: props => props.standOut,
        border: 'none',
        backgroundColor: props => props.secondaryBackground,
        '&::placeholder': {
            color: props => props.paragraph
        }
    },

    submitButton: {
        margin: '7px auto',
        padding: '7px',
        display: 'block',
        border: 'none',
        color: props => props.paragraph,
        backgroundColor: props => props.secondaryBackground,
        transition: '.3s ease-in',
        '&:hover': {
            color: props => props.standOut
        }
    }
});

export default subscribeFormStyles;