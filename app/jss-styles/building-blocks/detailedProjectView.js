import { createUseStyles } from "react-jss";
import colors from "../colors";

const detailedProjectViewStyles = createUseStyles({
  projectContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: {
      left: " 150px",
      right: "150px",
      bottom: "50px",
    },
    "& .card1-wrapper": {
      "& .button": {
        backgroundColor: "#000",
        borderColor: `${colors.mint}`,
        color: `${colors.mint}`,
        "& a": {
          color: `${colors.mint}`,
        },
        "&:hover": {
          backgroundColor: "#fff",
          color: "#000",
          "& a": {
            color: "#000",
          },
        },
      },
    },
    "& .card1": {
      backgroundColor: "#000",
      "& h4": {
        color: `${colors.mint}`,
      },
      "& h5": {
        color: `${colors.mint}`,
      },
      "& div": {
        color: "#777777",
      },
      "& a": {
        color: `${colors.mint}`,
        "&:hover": {
          color: `${colors.lightMint}`,
        },
      },
      "& .technology-item": {
        color: `${colors.mint}`,
        borderColor: `${colors.mint}`,
        "&:hover": {
          cursor: "default",
          backgroundColor: "#fff",
          color: "#000",
        },
      },
    },
    "& .card2-wrapper": {
      "& .button": {
        backgroundColor: "#1b1b1b",
        borderColor: "#fff",
        color: "#fff",
        "& a": {
          color: "#fff",
        },
        "&:hover": {
          backgroundColor: `${colors.mint}`,
          color: "#222",
          borderColor: `${colors.mint}`,
          "& a": {
            color: "#222",
          },
        },
      },
    },
    "& .card2": {
      backgroundColor: "#1b1b1b",
      "& h4": {
        color: "#fff",
      },
      "& h5": {
        color: "#fff",
      },
      "& div": {
        color: "#999999",
      },
      "& a": {
        color: `${colors.lightMint}`,
        "&:hover": {
          color: "#fff",
        },
      },
      "& .technology-item": {
        color: "#fff",
        borderColor: "#fff",
        "&:hover": {
          cursor: "default",
          backgroundColor: `${colors.mint}`,
          borderColor: `${colors.mint}`,
          color: "#222",
        },
      },
    },
    "& .card3-wrapper": {
      "& .button": {
        backgroundColor: "#eeeeee",
        borderColor: "rgba(0,0,0,0.2)",
        color: "rgba(0,0,0,1)",
        "& a": {
          color: "rgba(0,0,0,1)",
        },
        "&:hover": {
          backgroundColor: "#0a0a0a",
          color: "#eee",
          "& a": {
            color: "#eee",
          },
        },
      },
    },
    "& .card3": {
      backgroundColor: "#eeeeee",
      borderColor: "rgba(0,0,0,0.2)",
      "& h4": {
        color: "rgba(0,0,0,1)",
      },
      "& h5": {
        color: "rgba(0,0,0,1)",
      },
      "& div": {
        color: "#444444",
      },
      "& a": {
        color: `${colors.mint}`,
        "&:hover": {
          color: `${colors.lightMint}`,
        },
      },
      "& .technology-item": {
        color: "rgba(0,0,0,1)",
        border: "solid 1px rgba(0,0,0,0.2)",
        "&:hover": {
          cursor: "default",
          backgroundColor: "#0a0a0a",
          color: "#eee",
        },
      },
    },
  },
  backButton: {
    border: "1px solid #000",
    padding: "3px",
    transition: ".4s ease-in-out",
    margin: {
      left: "1px",
    },
    "&:hover": {
      cursor: "pointer",
    },
    width: "70px",
    textAlign: "center",
    "& svg": {
      width: "15px",
      height: "15px",
      margin: {
        right: "5px",
      },
    },
  },
  innerContainer: {
    border: "1px solid #000",
    margin: "1px",
  },
  title: {
    textAlign: "center",
    "& h4": {
      marginTop: "15px",
    },
  },
  link: {
    border: "1px solid #000",
    maxWidth: "130px",
    margin: "15px auto",
    transition: ".4s ease-in-out",
    "&:hover": {
      cursor: "pointer",
    },
  },
  loaderWrapper: {
    textAlign: "center",
  },
  loader: {
    display: "inline",
    margin: "0 auto",
  },
  sectionsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  section: {
    display: "flex",
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: {
      left: "10px",
      top: "10px",
      right: "5px",
      bottom: "10px",
    },
    "& div": {
      maxWidth: "400px",
      margin: {
        left: "15px",
        right: "10px",
        bottom: "10px",
        top: "3px",
      },
    },
    "& h6": {
      color: "inherit",
    },
    "& ul": {
      marginLeft: "35px",
    },
    "& a": {
      transition: ".2s linear",
    },
  },
  technologiesContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    padding: "10px",
  },
  technology: {
    border: "1px solid #000",
    borderRadius: "20px",
    margin: {
      left: "15px",
      right: "15px",
      top: "5px",
    },
    textAlign: "center",
    minWidth: "50px",
    padding: {
      top: "3px",
      bottom: "3px",
      left: "5px",
      right: "5px",
    },
    "& svg": {
      width: "15px",
      height: "15px",
      margin: {
        right: "5px",
      },
    },
  },
  errorMessage: {
    margin: {
      left: "auto",
      right: "auto",
      top: 0,
      bottom: 0,
    },
  },
  errorBackButton: {
    backgroundColor: "#0a0a0a",
    color: `${colors.mint}`,
    marginLeft: "auto",
    marginRight: "auto",
  },
  "@media (max-width: 1610px)": {
    section: {
      "& div": {
        maxWidth: "435px",
      },
    },
  },
  "@media (max-width: 1240px)": {
    section: {
      "& div": {
        maxWidth: "600px",
      },
    },
  },
  "@media (max-width: 770px)": {
    projectContainer: {
      padding: {
        left: "80px",
        right: "80px",
        bottom: "50px",
      },
    },
  },
  "@media (max-width: 640px)": {
    title: {
      "& h4": {
        fontSize: "1.1rem",
      },
    },
    section: {
      "& h5": {
        fontSize: "0.8rem",
      },
      "& div": {
        fontSize: "0.750rem",
      },
    },
    projectContainer: {
      padding: {
        left: "30px",
        right: "30px",
        bottom: "50px",
        top: "20px",
      },
    },
  },

  "@media (min-width: 2000px)": {
    title: {
      "& h4": {
        fontSize: "1.65rem",
      },
    },
    section: {
      "& h5": {
        fontSize: "1.4rem",
      },
      "& div": {
        maxWidth: "540px",
        fontSize: "1.1rem",
      },
    },
  },
});

export default detailedProjectViewStyles;
