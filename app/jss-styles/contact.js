import { createUseStyles } from 'react-jss';


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
    }
});

export default contactStyles;