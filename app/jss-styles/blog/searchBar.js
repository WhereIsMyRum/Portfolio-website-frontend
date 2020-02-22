import { createUseStyles } from 'react-jss';
import colors from '../colors';


const searchBarStyles = createUseStyles({
    wrapper: {
        backgroundColor: "#111",
        margin: '10px',
        '& input': {
            width: '100%',
            padding: '6px',
            backgroundColor: "#111",
            borderColor: 'transparent',
            marginRight: '40px',
            color:  `${colors.lightMint}`
        }
    }
});

export default searchBarStyles;