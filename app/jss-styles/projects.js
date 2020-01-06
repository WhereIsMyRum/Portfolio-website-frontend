import {createUseStyles} from 'react-jss';
import colors from './colors';

const projectsStyles = createUseStyles({
    projects: {
        width: '100vw',
        height: 'auto',
        minHeight: '100vh',
        backgroundColor:'#eeeeee',
        zIndex:20,
        position: 'relative'
    }
});

export default projectsStyles;