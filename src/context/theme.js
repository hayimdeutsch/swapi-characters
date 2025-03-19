import { createTheme } from "@mui/material/styles";
import { dark, light } from "@mui/material/styles/createPalette";

const primary = {
  main: "#111111",
  dark: "#000000",
  light: "#333333",
};

const secondary = {
  main: "#FFD700",
  dark: "#C0A000",
  light: "#FFD700",
};

const tertiary = {
  main: "#FFFFFF",
  dark: "#CCCCCC",
  light: "#FFFFFF",
};

const theme = createTheme({
  palette: {
    primary,
    secondary,
    tertiary,
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0B0B0",
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h1: {
      fontFamily: `'Star Jedi', sans-serif`,
      fontSize: "3rem",
      color: secondary.main,
    },
    h2: {
      fontFamily: `'Star Jedi', sans-serif`,
      fontSize: "2.5rem",
      color: secondary.main,
    },
    body1: {
      fontSize: "1rem",
      color: "#FFFFFF",
    },
    body2: {
      fontSize: "0.875rem",
      color: "#B0B0B0",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          textAlign: "center", // Center-align all table cells
        },
      },
    },
  },
});

export default theme;
