import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E3A8A",
      light: "#3B82F6",
    },
    secondary: {
      main: "#3B82F6",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F3F4F6",
    },
    text: {
      primary: "#1F2937",
      secondary: "#4B5563",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "48px",
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "28px",
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Roboto", sans-serif',
    },
  },
});

export default theme;
