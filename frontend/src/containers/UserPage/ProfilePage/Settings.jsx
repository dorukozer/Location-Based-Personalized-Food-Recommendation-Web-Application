import {
    Box,
    makeStyles,
    ThemeProvider,
    Typography
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
    paperContainer: {
        background: "#C1121F",
        height: "120vh",
        position: "relative",
        overflow: "hidden",
        objectFit: "cover"
    },
    header1: {
        color: "#C1121F",
        fontSize: 70
    },
    header2: {
        color: "#C1121F",
        fontSize: 70,
        fontStyle: "italic ",
        marginTop: 0
    },
    location: {
        color: "#003049",
        fontSize: 50,
        fontStyle: "bold"
    },
    container: {
        alignItems: "left",
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: "30%",
        left: "20%",
        right: "20%"
    },
    userContainer: {
        background: "#FDF0D5",
        position: "absolute",
        top: "10%",
        right: "10%",
        height: "100vh",
        width: "80vw",
        borderRadius: 10,
        padding: 10
    },
    iconRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20
    },
    button: {
        color: "#003049",
        fontSize: 20
    },
    buttonGroup: {
        display: "flex",
        alignItems: "left",
        justifyContent: "space-evenly"
    }
}));


const Settings = () => {
    const classes = useStyles();

    return (
        <ThemeProvider>
            <Box className={classes.paperContainer}>
                <Typography>
                    Settings
                </Typography>
            </Box>
        </ThemeProvider>
    );
}


export default Settings;