import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import image from "../../images/ConceptLogo.svg";
import { makeStyles } from "@material-ui/styles";
// import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    icon: {
        maxWidth: 100
    // paddingRight: 100,
    },
    outerContainer: {
    // backgroundColor: "rgba(118, 51, 51, 0.2)",
        backgroundColor: theme.palette.primary.transparent,
        maxHeight: 100
    },
    container: {
        display: "flex",
        justifyContent: "center"
    }
}));

// const pages = ["Home", "About Us"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];
const TopBar = () => {
    const classes = useStyles();
    
    return (
        <AppBar
            position="fixed"
            color="transparent"
            className={classes.outerContainer}
        >
            <Toolbar className={classes.container}>
                <a href="/">
                    <img className={classes.icon} src={image} alt="ConceptLogosx" />
                </a>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
