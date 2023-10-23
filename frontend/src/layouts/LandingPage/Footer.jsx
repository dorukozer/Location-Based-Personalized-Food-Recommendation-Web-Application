import React from "react";
import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    Box
} from "@material-ui/core";
import CopyrightIcon from "@mui/icons-material/Copyright";
const useStyles = makeStyles({
    appbar: {
        backgroundColor: "rgba(6, 24, 38, 0.9)",
        display: "flex",
        alignItems: "center"
    },
    container: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%"
    },
    incText: {
        fontSize: 15,
        fontWeight: "lighter",
        marginLeft: "10%"
    }
});

const Footer = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appbar}>
            <Toolbar>
                <Box className={classes.container}>
                    <CopyrightIcon fontSize="small" />
                    <Typography className={classes.incText}>
            What&apos;s Nearby INC.
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
