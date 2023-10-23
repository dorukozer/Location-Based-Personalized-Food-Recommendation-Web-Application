import { React } from "react";
import { Box, makeStyles, ThemeProvider, Typography } from "@material-ui/core";
import theme from "../../themes/theme";
import foodBG from "../../images/food-background.jpg";
import NavBar from "../../layouts/LandingPage/NavBar";
import Footer from "../../layouts/LandingPage/Footer";
// import AspectRatio from '@mui/joy';
const useStyles = makeStyles(() => ({
    paperContainer: {
        height: "100%",
        position: "relative",
        overflow: "hidden",
        marginTop: -10,
        marginBottom: -10
    },
    header1: {
        color: "#ffffff",
        fontSize: 70
    },
    header2: {
        color: "#ffffff",
        fontSize: 70,
        fontStyle: "italic "
    },
    body: {
        color: "#ffffff",
        fontSize: 20
    },
    image: {
        objectFit: "cover",
        maxWidth: "100%",
        maxHeight: "110%"
    },
    container: {
        alignItems: "left",
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: "30%",
        left: "20%",
        right: "20%"
    }
}));

// color1: f75342
// color2: 763333
// color3: ffffff
// fira sans code

const HomePage = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <NavBar />
            <Box className={classes.paperContainer}>
                <img
                    src={foodBG}
                    alt="food-background"
                    // style={{maxWidth: "100%", maxHeight: "%100"}}
                    className={classes.image}
                />
                <Box className={classes.container}>
                    <Typography className={classes.header1}>We are:</Typography>
                    <Typography className={classes.header2}>
            What&apos;s Nearby?
                    </Typography>
                    <Typography className={classes.body}>
                        Our goal is providing personalized restaurant recommendations based on user preferences
                        and community reviews to enhance the dining experience.
                    </Typography>
                </Box>
            </Box>
            <Footer />
        </ThemeProvider>
    );
};

export default HomePage;
