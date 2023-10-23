
import { Box, ThemeProvider, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import NavBar from "../../layouts/LandingPage/NavBar";
import theme from "../../themes/theme";
import Footer from "../../layouts/LandingPage/Footer";

const useStyles = makeStyles(() => ({
    box: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        background: theme.palette.beige.main,
        width: "100vw",
        height: "100vh",
        paddingTop: "20vh"
    },
    header1: {
        color: theme.palette.secondary.main,
        fontSize: 70
    },
    header2: {
        color: theme.palette.secondary.main,
        fontSize: 30,
        fontStyle: "italic "
    }
}));

const NotFound = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <NavBar />
            <Box className={classes.box}>
                <Typography className={classes.header1}>404 NOT FOUND.</Typography>
                <Typography className={classes.header2}>The page you are trying to reach is not available.</Typography>
            </Box>
            <Footer/>
        </ThemeProvider>
    )
}

export default NotFound;