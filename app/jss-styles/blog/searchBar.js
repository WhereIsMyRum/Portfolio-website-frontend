import { createUseStyles } from 'react-jss';
import colors from '../colors';


const searchBarStyles = createUseStyles({
    wrapper: {
        width: '90%',
        backgroundColor: "#111",
        padding: '6px',
        margin: {
            top: '15px',
            right: 'auto',
            bottom: '15px',
            left: 'auto',
        },

        '& input': {
            width: '100%',
            backgroundColor: "#111",
            borderColor: 'transparent',
            marginRight: '40px',
            color:  `${colors.lightMint}`
        }
    }
});

export default searchBarStyles;