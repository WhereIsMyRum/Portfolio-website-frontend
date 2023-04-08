import { createUseStyles } from "react-jss";
import colors from "./colors";

const globalStyles = createUseStyles({
  sectionHeader: {
    padding: {
      top: "85px",
      left: "85px",
    },
    marginBottom: "65px",
    "& h2": {
      color: colors.mint,
    },
  },

  paragraphStyling: {
    color: "#eee",
    "& p": {
      color: "#999",
    },
  },

  contentWrapper: {
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  "@media (max-width: 320px)": {
    sectionHeader: {
      padding: {
        top: "85px",
        left: "60px",
      },
    },
  },
});

export default globalStyles;
