import { createUseStyles } from 'react-jss';
import colors from '../colors';


const blogHeaderStyles = createUseStyles({
    contentWrapper: {
        backgroundColor: '#141414',
        width: '100vw',
        padding: {
            top: '0',
            bottom: '60px'
        }
    },

    toWebsite: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        left: '20px',
        top: '20px',
        width: '185px',
        padding: '10px',
        border: `2px solid ${colors.mint}`,
        borderRadius: '20px',
        color: colors.mint,
        fontFamily: 'NeonTubes',
        fontSize: '1.3rem',
        animation: `$flickerJustBorder ${Math.floor(Math.random() * 7) + 4}s ease-in-out infinite`,
        transition: '.3s ease-in-out',
        '& span': {
            animation: '$glow 4s ease-in-out infinite alternate',
            textShadow: `0 0 10px ${colors.mint}, 0 0 20px ${colors.lightMint}, 0 0 30px ${colors.lightMint}`
        },
        '& svg': {
            transform: 'rotateZ(180deg)',
            height: '30px',
            filter: `drop-shadow(0 0 10px ${colors.lightMint})`,
        },
        '&:hover': {
            animation: 'none',
            color: colors.lightMint,
            border: `3px solid ${colors.lightMint}`,
            boxShadow: '0px 0px 15px 1px rgba(163, 217, 217, 0.75), inset 0px 0px 15px 1px rgba(163, 217, 217, 0.75)',
            '& span': {
                animation: 'none'
            }
        }
    },

    socialMedia: {
        margin: '0 auto',
        width: '70%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        //border: `3px solid ${colors.mint}`,
        //borderRadius: '20px',
        //animation: `$flickerJustBorder ${Math.floor(Math.random() * 10) + 12}s ease-in-out infinite`,
        '& svg': {
            height: '70px',
            width: '70px',
            color: colors.mint,
            strokeWidth: '3px',
            transition: '.3s linear',
            filter: `drop-shadow(0 0 10px ${colors.lightMint})`,
            '&:hover': {
                color: colors.lightMint,
            }
        }
    },

    header: {
        height: '100vh',
        padding: '20px',
        width: '100vw',
        margin: '0 auto 40px',
        backgroundColor: '#171717',
        backgroundImage: 'url(/static/images/brickwall.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'inset 0px -10px 5px 5px rgba(20,20,20,1)',
        border: '1px solid #141414',
        '& h1': {
            padding: '0 10px',
            marginBottom: '0',
            color: `${colors.mint}`,
            fontFamily: 'NeonTubes',
            fontSize: '5rem',
            fontWeight: '400',
            animation: '$glow 4s ease-in-out infinite alternate',
            '& span.neonE': {
                animation: '$blinkE 16s ease-in-out infinite',
            },
            '& span.neonI': {
                animation: '$blinkI 16s ease-in-out infinite'
            },
            '& span.neonT': {
                animation: '$blinkT 16s ease-in-out infinite'
            }
        },
        '& p': {
            padding: '15px 10px 5px',
            fontSize: '1.6rem',
        }
    },

    headerContentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        border: `3px solid ${colors.mint}`,
        borderRadius: '20px',
        padding: '20px 10px',
        minHeight: '370px',
        justifyContent: 'space-around',
        animation: `$flickerJustBorder ${Math.floor(Math.random() * 10) + 7}s ease-in-out infinite`,
    },

    '@keyframes flicker': {
        '0%': {
            boxShadow: '0px 0px 20px 5px rgba(92,141,141,0.75)',
            color: colors.mint,
            border: `1px solid ${colors.mint}`
        },
        '45%': {
            boxShadow: '0px 0px 25px 8px rgba(163, 217, 217, 0.75)',
            color: colors.mint,
            border: `1px solid ${colors.mint}`,
            animationTimingFunction: 'steps(1, end)'
        },
        '46%': {
            boxShadow: '0px 0px 15px 6px rgba(21,21,21,1)',
            color: '#141414',
            border: `1px solid #141414`,
            animationTimingFunction: 'steps(1, end)'
        },
        '47%': {
            boxShadow: '0px 0px 20px 5px rgba(92,141,141,0.75)',
            color: colors.mint,
            border: `1px solid ${colors.mint}`,
            animationTimingFunction: 'steps(1, end)'
        },
        '48%': {
            boxShadow: '0px 0px 15px 6px rgba(21,21,21,1)',
            color: '#141414',
            border: `1px solid #141414`,
            animationTimingFunction: 'steps(1, end)'
        },
        '50%': {
            boxShadow: '0px 0px 20px 5px rgba(92,141,141,0.75)',
            color: colors.mint,
            border: `1px solid ${colors.mint}`,
        },
        '75%': {
            boxShadow: '0px 0px 25px 8px rgba(163, 217, 217, 0.75)',
            color: colors.mint,
            border: `1px solid ${colors.mint}`,
        },
        '100%': {
            boxShadow: '0px 0px 20px 5px rgba(92,141,141,0.75)',
            color: colors.mint,
            border: `1px solid ${colors.mint}`
        }
    },

    '@keyframes flickerJustBorder': {
        '0%': {
            boxShadow: '0px 0px 10px 1px rgba(92,141,141,0.75), inset 0px 0px 10px 1px rgba(92,141,141,0.75)',
            border: `3px solid ${colors.mint}`
        },
        '46%': {
            boxShadow: '0px 0px 15px 1px rgba(163, 217, 217, 0.75), inset 0px 0px 15px 1px rgba(163, 217, 217, 0.75)',
            animationTimingFunction: 'steps(1, end)',
            border: `3px solid ${colors.mint}`,
        },
        '47%': {
            boxShadow: '0px 0px 15px 5px rgba(21,21,21,1), inset 0px 0px 15px 5px rgba(21,21,21,1)',
            animationTimingFunction: 'steps(1, end)',
            border: `3px solid #141414`,
        },
        '48%': {
            boxShadow: '0px 0px 10px 1px rgba(92,141,141,0.75), inset 0px 0px 10px 1px rgba(92,141,141,0.75)',
            animationTimingFunction: 'steps(1, end)',
            border: `3px solid ${colors.mint}`
        },
        '49%': {
            boxShadow: '0px 0px 15px 5px rgba(21,21,21,1), inset 0px 0px 15px 5px rgba(21,21,21,1)',
            animationTimingFunction: 'steps(1, end)',
            border: `3px solid #141414`,
        },
        '50%': {
            boxShadow: '0px 0px 10px 1px rgba(92,141,141,0.75), inset 0px 0px 10px 1px rgba(92,141,141,0.75)',
            border: `3px solid ${colors.mint}`
        },
        '75%': {
            boxShadow: '0px 0px 15px 1px rgba(163, 217, 217, 0.75), inset 0px 0px 15px 1px rgba(163, 217, 217, 0.75)',
            border: `3px solid ${colors.mint}`
        },
        '100%': {
            boxShadow: '0px 0px 10px 1px rgba(92,141,141,0.75), inset 0px 0px 10px 1px rgba(92,141,141,0.75)',
            border: `3px solid ${colors.mint}`
        }
    },

    '@keyframes glow': {
        'from': {
          textShadow: `0 0 10px ${colors.darkMint}, 0 0 20px ${colors.mint}, 0 0 30px ${colors.mint}`
        },
        'to': {
          textShadow: `0 0 10px ${colors.mint}, 0 0 20px ${colors.lightMint}, 0 0 30px ${colors.lightMint}`
        }
    },

    '@keyframes subtitleShadow': {
        'from': {
            textShadow: '1px 2px 2px rgba(0,0,0,1)'
        },
        'to': {
            textShadow: '1px 5px 4px rgba(0,0,0,0.5)'
        }
    },

    '@keyframes blinkI': {
        '0%': {
            textShadow: `0 0 10px ${colors.darkMint}, 0 0 20px ${colors.mint}, 0 0 30px ${colors.mint}`,
            color: colors.mint
        },
        '25%': {
            textShadow: `0 0 10px ${colors.mint}, 0 0 20px ${colors.lightMint}, 0 0 30px ${colors.lightMint}`,
            color: colors.mint,
            animationTimingFunction: 'steps(1, end)'
        },
        '40%': {
            textShadow: '-1px 0 #151515, 0 1px #151515, 1px 0 #151515, 0 -1px #151515',
            color: '#141414',
            animationTimingFunction: 'steps(1, end)'
        },
        '41%': {
            textShadow: `0 0 10px ${colors.mint}, 0 0 20px ${colors.lightMint}, 0 0 30px ${colors.lightMint}`,
            color: colors.mint,
            animationTimingFunction: 'steps(1, end)'
        },
        '42%': {
            textShadow: '-1px 0 #151515, 0 1px #151515, 1px 0 #151515, 0 -1px #151515',
            color: '#141414',
            animationTimingFunction: 'steps(1, end)'
        },
        '60%': {
            textShadow: `0 0 10px ${colors.darkMint}, 0 0 20px ${colors.mint}, 0 0 30px ${colors.mint}`,
            color: colors.mint
        },
        '65%': {
            animationTimingFunction: 'steps(1, end)',
            animationDelay: '0.6s',
            color: colors.mint,
            textShadow: `0 0 10px ${colors.darkMint}, 0 0 20px ${colors.mint}, 0 0 30px ${colors.mint}`
        },
        '66%': {
            textShadow: '-1px 0 #151515, 0 1px #151515, 1px 0 #151515, 0 -1px #151515',
            color: '#141414',
            animationTimingFunction: 'steps(1, end)'
        },
        '67%': {
            color: colors.mint,
            textShadow: `0 0 10px ${colors.darkMint}, 0 0 20px ${colors.mint}, 0 0 30px ${colors.mint}`,
            animationTimingFunction: 'steps(1, end)'
        },
        '70%': {
            textShadow: '-1px 0 #151515, 0 1px #151515, 1px 0 #151515, 0 -1px #151515',
            color: '#141414',
            animationTimingFunction: 'steps(1, end)'
        },
        '95%': {
            color: colors.mint,
            textShadow: `0 0 10px ${colors.darkMint}, 0 0 20px ${colors.mint}, 0 0 30px ${colors.mint}`
        },
        '96%': {
            textShadow: '-1px 0 #151515, 0 1px #151515, 1px 0 #151515, 0 -1px #151515',
            color: '#141414',
            animationTimingFunction: 'steps(1, end)'
        },
        '97%': {
            color: colors.mint,
            textShadow: `0 0 10px ${colors.darkMint}, 0 0 20px ${colors.mint}, 0 0 30px ${colors.mint}`
        }
    },

    '@keyframes blinkE': {
        '0%': {
            textShadow: `0 0 10px ${colors.darkMint}, 0 0 20px ${colors.mint}, 0 0 30px ${colors.mint}`,
            color: colors.mint
        },
        '25%': {
            textShadow: `0 0 10px ${colors.mint}, 0 0 20px ${colors.lightMint}, 0 0 30px ${colors.lightMint}`,
            color: colors.mint
        },
        '50%': {
            textShadow: `0 0 10px ${colors.darkMint}, 0 0 20px ${colors.mint}, 0 0 30px ${colors.mint}`,
            color: colors.mint,
            animationTimingFunction: 'steps(1, end)'
        },
        '56%': {
            textShadow: '-1px 0 #151515, 0 1px #151515, 1px 0 #151515, 0 -1px #151515',
            color: '#141414',
            animationTimingFunction: 'steps(1, end)'
        },
        '59%': {
            animationTimingFunction: 'steps(1, end)',
            color: colors.mint,
            textShadow: `0 0 10px ${colors.darkMint}, 0 0 20px ${colors.mint}, 0 0 30px ${colors.mint}`
        },
        '60%': {
            textShadow: '-1px 0 #151515, 0 1px #151515, 1px 0 #151515, 0 -1px #151515',
            color: '#141414',
            animationTimingFunction: 'steps(1, end)'
        },
        '61%': {
            color: colors.mint,
            textShadow: `0 0 10px ${colors.darkMint}, 0 0 20px ${colors.mint}, 0 0 30px ${colors.mint}`,
            animationTimingFunction: 'steps(1, end)'
        },
        '62%': {
            textShadow: '-1px 0 #151515, 0 1px #151515, 1px 0 #151515, 0 -1px #151515',
            color: '#141414',
            animationTimingFunction: 'steps(1, end)'
        },
        '90%': {
            color: colors.mint,
            textShadow: `0 0 10px ${colors.darkMint}, 0 0 20px ${colors.mint}, 0 0 30px ${colors.mint}`,
        },
    },

    '@keyframes blinkT': {
        '0%': {
            textShadow: `0 0 10px ${colors.darkMint}, 0 0 20px ${colors.mint}, 0 0 30px ${colors.mint}`,
            color: colors.mint
        },
        '25%': {
            textShadow: `0 0 10px ${colors.mint}, 0 0 20px ${colors.lightMint}, 0 0 30px ${colors.lightMint}`,
            color: colors.mint
        },
        '50%': {
            textShadow: `0 0 10px ${colors.darkMint}, 0 0 20px ${colors.mint}, 0 0 30px ${colors.mint}`,
            color: colors.mint,
            animationTimingFunction: 'steps(1, end)'
        },
        '62%': {
            textShadow: '-1px 0 #151515, 0 1px #151515, 1px 0 #151515, 0 -1px #151515',
            color: '#141414',
            animationTimingFunction: 'steps(1, end)'
        },
        '63%': {
            animationTimingFunction: 'steps(1, end)',
            color: colors.mint,
            textShadow: `0 0 10px ${colors.darkMint}, 0 0 20px ${colors.mint}, 0 0 30px ${colors.mint}`
        },
        '66%': {
            textShadow: '-1px 0 #151515, 0 1px #151515, 1px 0 #151515, 0 -1px #151515',
            color: '#141414',
            animationTimingFunction: 'steps(1, end)'
        },
        '69%': {
            color: colors.mint,
            textShadow: `0 0 10px ${colors.darkMint}, 0 0 20px ${colors.mint}, 0 0 30px ${colors.mint}`,
            animationTimingFunction: 'steps(1, end)'
        },
        '70%': {
            textShadow: '-1px 0 #151515, 0 1px #151515, 1px 0 #151515, 0 -1px #151515',
            color: '#141414',
            animationTimingFunction: 'steps(1, end)'
        },
        '100%': {
            textShadow: '-1px 0 #151515, 0 1px #151515, 1px 0 #151515, 0 -1px #151515',
            color: '#141414',
            animationTimingFunction: 'steps(1, end)'
        }
    },
    '@media (max-width: 650px)': {
        header: {
            '& h1': {
                fontSize: '4.5rem'
            }
        },
        socialMedia: {
            '& svg': {
                width: '55px',
                height: '55px'
            }
        },
    },
    '@media (max-width: 590px)': {
        header: {
            minHeight: '350px',
            '& h1': {
                fontSize: '4rem'
            },
            '& p': {
                fontSize: '1.4rem'
            }
        },
        lightBulb: {
            height: '350px',
        },
        socialMedia: {
            '& svg': {
                width: '50px',
                height: '50px'
            }
        },
    },
    '@media (max-width: 540px)': {
        header: {
            minHeight: '300px',
            '& h1': {
                fontSize: '3.2rem'
            },
            '& p': {
                fontSize: '1.3rem'
            }
        },
        socialMedia: {
            width: '80%',
        },
        lightBulb: {
            height: '300px',
        }
    },
    '@media (max-width: 460px)': {
        header: {
            height: '70vh',
            '& h1': {
                fontSize: '2.6rem'
            },
            '& p': {
                fontSize: '1.1rem'
            }
        },
        socialMedia: {
            '& svg': {
                width: '40px',
                height: '40px'
            }
        },
        headerContentWrapper: {
            minHeight: 0
        },
        toWebsite: {
            padding: '6px',
            fontSize: '1.1rem',
            width: '150px',
            '& svg': {
                height: '23px'
            }
        }
    },

    '@media (max-width: 395px)': {
        header: {
            '& h1': {
                fontSize: '2.1rem'
            },
        },
        socialMedia: {
            '& svg': {
                width: '40px',
                height: '40px'
            }
        },
    },

    '@media (max-width: 350px)': {
        header: {
            '& h1': {
                fontSize: '1.7rem'
            }
        },
        socialMedia: {
            '& svg': {
                width: '23px',
                height: '23px'
            }
        },
    }
});

export default blogHeaderStyles;