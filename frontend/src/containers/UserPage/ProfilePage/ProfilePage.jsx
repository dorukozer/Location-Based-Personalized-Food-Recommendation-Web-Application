import { React, useState, useEffect } from "react";
import {
    Box,
    makeStyles,
    ThemeProvider,
    Typography,
    ButtonGroup,
    Button
} from "@material-ui/core";
import Footer from "../../../layouts/LandingPage/Footer";
import UserNavBar from "../../../layouts/UserPage/UserNavbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import theme from "../../../themes/theme";
import Overview from "./Overview";
import Settings from "./Settings";


const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: "100%",
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    },
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

// color1: f75342
// color2: 763333
// color3: ffffff
// fira sans code

const ProfilePage = () => {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [selectedComponent, setSelectedComponent] = useState(1);

    const handleButtonClick = (component) => {
        setSelectedComponent(component);
    };


    const renderViews = (which) => {
        console.log(selectedComponent);
        switch (which) {
        case 1:
            return <Overview/>;
        case 0:
            return <Settings/>;
        default:
            return <Typography>Something went wrong</Typography>;
        }
    }

    const buttons = [
        <Button key="profile" className={classes.button} variant="text" onClick={() => handleButtonClick(0)}>
            Profile
        </Button>,
        <Button key="overview" className={classes.button} variant="text" onClick={() => handleButtonClick(1)}>
            Overview
        </Button>,
        <Button key="settings" className={classes.button} variant="text" onClick={() => handleButtonClick(0)}>
            Settings
        </Button>
    ];

    useEffect(() => {
        try {
            setUsername(sessionStorage.getItem("user").toUpperCase());
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <UserNavBar />
            <Box className={classes.paperContainer}>
                <Box className={classes.userContainer}>
                    <Box className={classes.iconRow}>
                        <AccountCircleIcon sx={{ fontSize: 60 }} />
                        <Typography className={classes.location}>
              WELCOME {`${username}`}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <ButtonGroup
                            // orientation="vertical"
                            aria-label="vertical contained button group"
                            className={classes.buttonGroup}
                        >
                            {buttons}
                        </ButtonGroup>
                    </Box>
                    {renderViews(selectedComponent)}
                </Box>
            </Box>

            <Footer />
        </ThemeProvider>
    );
};

export default ProfilePage;
