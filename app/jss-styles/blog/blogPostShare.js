import { createUseStyles } from 'react-jss';

const blogPostShareStyles = createUseStyles({
    wrapper: {
        textAlign: 'center',
        margin: '5px',
        padding: '10px 20px',
        '& svg': {
            height: 'auto',
            width: '24px',
            color: props => `${props.header}`,
            transition: '.3s linear',
            margin: '5px 9px',
            '&:hover': {
                color: props => `${props.standOut}`,
            }
        }
    },

});

export default blogPostShareStyles;