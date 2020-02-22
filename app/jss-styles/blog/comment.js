import { createUseStyles } from 'react-jss';
import colors from '../colors';


const commentStyles = createUseStyles({
    wrapper: {
        margin: '20px auto',
        maxWidth: '600px',
        padding: '15px 25px',
        borderLeft: {
            width: '2px',
            style: 'solid',
        },
        boxShadow: '7px 7px 6px -6px rgba(0,0,0,0.4)',
        borderLeftColor: props => props.standOut,
        backgroundColor: props => props.background
    },
    nick: {
        marginBottom: '5px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: props => props.header
    },
    date: {
        fontSize: '0.7rem',
        marginBottom: '12px',
        paddingLeft: '8px',
    },
    text: {
        overflow: 'hidden',
        overflowWrap: 'break-word',
        color: props => props.paragraph
    }
});

export default commentStyles;