import { createUseStyles } from 'react-jss';
import colors from '../colors';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';

const commentFormStyles = createUseStyles({
    wrapper: {
        width: '100%',
        textAlign: 'center',
        '& h5': {
            color: props => props.header
        },
        '& form': {
            padding: '10px'
        }
    },

    formWrapper: {
        maxWidth: '550px',
        margin: '0 auto'
    },

    input: {
        width: '100%',
        padding: '4px',
        border: 'none',
        margin: '1px 0',
        backgroundColor: props => props.secondaryBackground,
        color: props => props.standOut,
        '&::placeholder': {
            color: props => props.paragraph
        },
    },

    honey: {
        width: '1px',
        height: '1px',
        visibility: 'hidden'
    },

    submit: {
        padding: '8px',
        border: 'none',
        float: 'left',
        transition: '.3s ease-in',
        backgroundColor: props => props.background,
        color: props => props.paragraph,
        '&:hover': {
            color: props => props.standOut
        }
    }
});

export default commentFormStyles;