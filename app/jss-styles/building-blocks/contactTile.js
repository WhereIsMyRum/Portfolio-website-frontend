import { createUseStyles } from 'react-jss';
import colors from '../colors';


const contactTileStyles = createUseStyles({
    contactTile: {
        minWidth: '187px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: '.3s linear',
        margin: {
            bottom: '10px'
        },
        padding: '10px',
        '& svg': {
            lineHeight: '1.5',
            height: '27px',
            width: '27px'
        },
        '& p': {
            marginBottom: 0,
            color: '#999'
        },
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#222'
        }
    },
    contactTileHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '12px'
    },
    text: {
        color: `${colors.mint} !important`,
        display: 'inline-block',
        marginRight: '10px',
        marginBottom: '0'
    }
});

module.exports = {
    contactTileStyles,
}
//export default projectsCardStyles;