import { createUseStyles } from "react-jss";
import colors from "../colors";

const languageSelectorStyles = createUseStyles({
  languageSelector: {
    top: 0,
    left: 0,
    position: "fixed",
    zIndex: "400",
    width: "100vw",
    height: "0",
    backgroundColor: "#0c0c0c",
    display: "none",
  },
  closeBtn: {
    width: "28px",
    opacity: 0,
    height: "28px",
    position: "relative",
    float: "right",
    top: "30px",
    right: "30px",
    color: `${colors.mint}`,
    transition: ".3s  linear",
    "&:hover": {
      cursor: "pointer",
      color: `${colors.lightMint}`,
    },
  },
  languageTiles: {
    position: "fixed",
    opacity: 0,
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  language: {
    color: `${colors.mint}`,
    padding: "10px",
    margin: "10px",
    minWidth: "150px",
    fontSize: "1rem",
    textAlign: "center",
    transition: ".3s ease-out",
    backgroundColor: "#0d0d0d",
    "&:hover": {
      color: `${colors.lightMint}`,
      backgroundColor: "#222",
      cursor: "pointer",
    },
  },
});

export default languageSelectorStyles;
