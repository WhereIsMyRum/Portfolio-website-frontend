import homeStyles from '../jss-styles/home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
        const classes = homeStyles(); 
        return (<div id="home">
            <div className={classes.wrapper}>
                <div className={classes.parallaxImg}>
                    <div className={classes.breakFix}></div>
                </div>
                <img className={`${classes.logo} logo`} src="/static/images/Logo.png" alt="My logo - Fehu rune in a hexagon"></img>
                <img className={`${classes.logo2} ${classes.logo} logo`} src="/static/images/Logo_light.png" alt="My logo in light version"></img>
                <div className={classes.introduction}>
                    <div className={classes.jumbotron}>
                        <p className={classes.introTxt}>Hello.</p> <span className={classes.introTxt}>My name is&nbsp;
                        <h1 style={{display:'inline', textTransform: 'none'}} className={classes.standingOutTxt}>Piotr<span style={{display:'none'}}>Połcik</span></h1></span><span className={classes.introTxt}>,</span>
                       <p className={classes.introTxt}>welcome to my developer portfolio.</p>
                    </div>
                </div>
            </div>
        </div>)
        };

export default Home;