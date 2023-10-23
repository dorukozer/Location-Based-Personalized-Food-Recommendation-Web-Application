// import { createTheme } from "@material-ui/core";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: ["Fira Sans", "sans-serif"].join(",")
    },
    palette: {
        primary: {
            main: "#780000",
            transparent: "rgba(120, 0, 0,0.8)"
        },
        secondary: {
            main: "#C1121F"
        },
        pink: {
            main: "#FFB4C4"
        },
        green: {
            main: "#405D12"
        },
        beige: {
            main: "#FDF0D5"
        },
        darkBlue: {
            main: "#003049"
        },
        blue: {
            main: "#669BBC"
        }
    }
});

export default theme;
