import { createUseStyles } from 'react-jss';


const projectsDisplayStyles = createUseStyles({
    projectsContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: {
            left: '150px',
            right: '150px',
            bottom: '50px'
        },
        flexWrap: 'wrap'
    },
    '@media (max-width: 770px)': {
        projectsContainer: {
            padding: {
                left: '80px',
                right: '80px',
                bottom: '50px'
            }
        }
    },
    '@media (max-width: 640px)': {
        projectsContainer: {
            padding: {
                left: '30px',
                right: '30px',
                bottom: '50px',
                top: '20px'
            }
        }
    }
});

export default projectsDisplayStyles;