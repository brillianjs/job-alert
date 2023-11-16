// styles/theme.js
import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: green[500], // Adjust the green color as needed
    },
  },
});

export default theme;
