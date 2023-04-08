import { createUseStyles } from "react-jss";
import colors from "./colors";

const navbarStyles = createUseStyles({
  navbar: {
    visibility: "visible",
    right: "-100%",
    display: "flex",
    width: "100vw",
    zIndex: 9999,
    backgroundColor: "#131313",
    opacity: "0.8",
    transition: "0.5s ease-out",
    marginBottom: "0 !important",
    top: "0",
    position: "fixed",
    textTransform: "none",
    "& span.active": {
      color: `${colors.mint} !important`,
    },
  },

  navLink: {
    transition: ".3s ease-out",
    color: `#808080 !important`,
    "&:hover": {
      cursor: "pointer",
      color: `${colors.lightMint} !important`,
    },
  },

  socialMedia: {
    position: "fixed",
    bottom: "20px",
    margin: "0 auto",
    width: "220px",
    height: "45px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 99,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "& svg": {
      height: "40px",
      width: "40px !important",
      color: colors.mint,
      transition: ".3s linear",
      "&:hover": {
        color: colors.lightMint,
        transform: "rotateY(180deg)",
      },
    },
  },

  langSelect: {
    marginLeft: "35px",
  },

  scrollUp: {
    backgroundColor: colors.mint,
    color: colors.mint,
    zIndex: "100",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px",
    borderRadius: "100%",
    transition: ".3s ease-in-out",
    "& svg": {
      height: "25px",
      width: "25px",
    },
    "&:hover": {
      backgroundColor: colors.lightMint,
      cursor: "pointer",
    },
  },

  "@media (max-width: 1024px)": {
    socialMedia: {
      width: "200px",
      height: "36px",
      "& svg": {
        height: "35px",
        width: "35px",
      },
    },
  },

  "@media (max-width: 770px)": {
    navbar: {
      right: "0%",
    },
    langSelect: {
      marginLeft: "0",
      marginTop: "15px",
    },
  },

  "@media (min-width: 1024px)": {
    navLink: {
      fontSize: "1rem !important",
    },
  },
});

export default navbarStyles;
