import homeStyles from '../../jss-styles/index/home';


const Home = (props) => {
    const classes = homeStyles();
    return (<div id="home">
        <div className={classes.wrapper}>
            <div className={classes.parallaxImg}>
                <div className={classes.breakFix}></div>
            </div>
            <div className={classes.introduction}>
                <div className={classes.jumbotron}>
                    <p className={classes.introTxt}>{props.content.intro.greeting}</p> <span className={classes.introTxt}>{props.content.intro.introduction}&nbsp;
                        <h1 style={{ display: 'inline', textTransform: 'none' }} className={classes.standingOutTxt}>{props.content.intro.nameVisible}<span style={{ display: 'none' }}>{props.content.intro.nameHidden}</span></h1></span><span className={classes.introTxt}>,</span>
                    <p className={classes.introTxt}>{props.content.intro.welcome}</p>
                </div>
            </div>
        </div>
    </div>)
};

export default Home;