import { createUseStyles } from 'react-jss';
import colors from './colors';
import { faAutoprefixer } from '@fortawesome/free-brands-svg-icons';

const rnd = () => Math.floor(Math.random() * (+31 - +23)) + +23;
const projectsCardStyles = createUseStyles({
    cardGeneral: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        margin: '1px',
        flexGrow: '1',
        flexShrink: '1',
        minHeight: '170px',
        '& h3': {
            float: 'left',
            fontSize: '1.2rem',
            transition: '.4s ease-in-out',
            padding: {
                left: '10px',
                right: '10px',
                top: '10px'
            },
            '& div': {
                height: '1px',
                width: '100%',
                backgroundColor: 'white',
                transition: '.4s ease-in-out'
            }
        },
        '& p': {
            maxWidth: '435px',
            transition: '.4s ease-in-out',
            margin: {
                left: '15px',
                right: '15px',
                top: '5px'
            }
        },
        '& svg': {
            width: '15px',
            height: '15px',
            margin: {
                left: '5px'
            }
        },
        '& .more': {
            width: '60px',
            alignSelf: 'flex-end',
            color: 'transparent',
            margin: {
                top: 'auto',
                bottom: '8px',
                left: '0',
                right: '8px',
            },
            '&:hover': {
                cursor: 'pointer'
            }
        },
        '& span': {
            position: 'absolute',
            overflow: 'hidden',
            display: 'block',
            height: '100%',
            width: '0',
            transition: 'width .4s ease-in-out',
        },
        '&:hover': {
            '& span': {
                width: '100%',
            }
        }
    },

    navLink: {
        display: 'inline-block'
    },

    content: {
        display: 'flex',
        flexDirection: 'column',
        zIndex: '1',
        height: '100%'
    },

    card1: {
        flexBasis: `0 1 ${rnd()}%`,
        backgroundColor: "#000",
        '& h3': {
            color: `${colors.mint}`,
            '& div': {
                backgroundColor: `${colors.lightMint}`
            }
        },
        '& p': {
            color: '#777777'
        },
        '& span': {
            backgroundColor: '#fff'
        },
        '& .more': {
            color: '#777777'
        },
        '&:hover': {
            '& h3': {
                color: "#000",
                '& div': {
                    backgroundColor: '#000'
                }
            },
            '& p': {
                color: '#000'
            },
            '& .more': {
                color: '#000'
            }
        }
    },
    card2: {
        flexBasis: `0 1 ${rnd()}%`,
        backgroundColor: '#1b1b1b',
        '& h3': {
            color: '#fff',
        },
        '& p': {
            color: '#999999'
        },
        '& span': {
            backgroundColor: `${colors.mint}`
        },
        '& .more': {
            color: '#fff'
        },
        '&:hover': {
            '& h3': {
                color: "#222",
                '& div': {
                    backgroundColor: '#222'
                }
            },
            '& p': {
                color: '#222'
            },
            '& .more': {
                color: '#222'
            }
        }
    },
    card3: {
        flexBasis: `0 1 ${rnd()}%`,
        backgroundColor: "#eeeeee",
        border: 'solid 1px rgba(0,0,0,0.2)',
        '& h3': {
            color: 'rgba(0,0,0,1)',
            '& div': {
                backgroundColor: 'rgba(0,0,0,1)',
            }
        },
        '& p': {
            color: '#444444'
        },
        '& span': {
            backgroundColor: '#0a0a0a'
        },
        '& .more': {
            color: '#444444'
        },
        '& :hover': {
            '& h3': {
                color: "#eee",
                '& div': {
                    backgroundColor: '#eee'
                }
            },
            '& p': {
                color: '#eee'
            },
            '& .more': {
                color: '#eee'
            }
        }
    },
    card4: {
        flexBasis: `0 1 ${rnd()}%`,
        backgroundColor: "#333",
        '& h3': {
            color: 'blue'
        }
    },
    card5: {
        flexBasis: `0 1 ${rnd()}%`,
        backgroundColor: "#444",
        '& h3': {
            color: 'purple'
        }
    },
    '@media (max-width: 640px)': {
        cardGeneral: {
            '& h3': {
                fontSize: '0.9rem'
            }
        }
    },
    '@media (min-width: 200px)': {
        cardGeneral: {
            '& h3': {
                fontSize: '1.5rem'
            },
            '& p': {
                fontSize: '1.2rem !important',
                maxWidth: '520px'
            }
        }
    }
});

const getRandomCardClass = () => {
    const c = Math.floor(Math.random() * (+3 - +0)) + +0;
    switch (c) {
        case 0:
            return 'card1';
            break;
        case 1:
            return 'card2';
            break;
        case 2:
            return 'card3';
            break;
        case 3:
            return 'card4';
            break;
        case 4:
            return 'card5';
            break;
        default:
            return 'card1';
            break;
    }
};

module.exports = {
    projectsCardStyles,
    getRandomCardClass
}
//export default projectsCardStyles;