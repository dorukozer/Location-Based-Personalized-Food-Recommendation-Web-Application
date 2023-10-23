
import React from "react";
import { makeStyles, ThemeProvider, Typography } from "@material-ui/core";
import theme from "../../themes/theme";
import NavBar from "../../layouts/LandingPage/NavBar";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: "100%",
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    },
    splashScreen: {
        width: "100%",
        height: "100%",
        display: "flex"
    }
}));

// color1: f75342
// color2: 763333
// color3: ffffff
// fira sans code

const ContactUs = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <NavBar />
            <Typography className={classes.splashScreen}>CMoN</Typography>
        </ThemeProvider>
    );
};

export default ContactUs;
