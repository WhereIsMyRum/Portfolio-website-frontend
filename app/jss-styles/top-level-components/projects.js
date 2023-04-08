import { createUseStyles } from "react-jss";

const projectsStyles = createUseStyles({
  projects: {
    width: "100vw",
    height: "auto",
    minHeight: "100vh",
    backgroundColor: "#eeeeee",
    zIndex: 20,
    position: "relative",
  },

  projectsContainer: {
    display: "flex",
    flexDirection: "row",
    padding: {
      left: "150px",
      right: "150px",
      bottom: "50px",
    },
    flexWrap: "wrap",
  },

  "@media (max-width: 770px)": {
    projectsContainer: {
      padding: {
        left: "80px",
        right: "80px",
        bottom: "50px",
      },
    },
  },

  "@media (max-width: 640px)": {
    projectsContainer: {
      padding: {
        left: "30px",
        right: "30px",
        bottom: "50px",
        top: "20px",
      },
    },
  },
});

export default projectsStyles;
