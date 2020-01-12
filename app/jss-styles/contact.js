import { createUseStyles } from 'react-jss';
import colors from './colors';


const contactStyles = createUseStyles({
    contact: {
        width: '100vw',
        height: 'auto',
        minHeight: '100vh',
        backgroundColor: '#151515',
        zIndex: 20,
        position: 'relative'
    },
    contactForm: {
        width: '100%',
        minHeight: '40vh !important'
    },
    orDivider: {
        color: `${colors.mint}`,
        textAlign: 'center',
        marginBottom: '20px',
        marginTop: '40px'
    },
    contactList: {
        maxWidth: '600px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: '90px'
    },
});

export default contactStyles;