import React, { useState } from "react";
import {
    Box,
    Button,
    Container,
    makeStyles,
    TextField,
    ThemeProvider,
    Typography
} from "@material-ui/core";
import theme from "../../themes/theme.jsx";
import foodBG from "../../images/food-background.jpg";
import TopBar from "../../layouts/LandingPage/TopBar.jsx";
import { fetchLogin } from "../../api/authentication";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import Footer from "../../layouts/LandingPage/Footer.jsx";
import { fetchLocation } from "../../api/location.js";

const useStyles = makeStyles((theme) => ({
    outerContainer: {
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    textField: {
        margin: "normal",
        marginBottom: "2",
        marginTop: "2"
    },
    formContainer: {
        display: "flex",
        flexDirection: "column",
        marginTop: 10,
        marginBottom: 10
    },
    container: {
        maxWidth: 300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        top: "30%",
        // height: "auto",
        border: "1px solid #ccc",
        borderRadius: 4,
        backgroundColor: "#ffffff",
        position: "absolute"
    },
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
    },
    errorMessage: {
        display: "flex",
        fontSize: 10
    },
    image: {
        objectFit: "cover",
        maxWidth: "100%",
        maxHeight: "110%",
        // filter: 'blur(2px)'
        opacity: 0.8
    }
}));

// eslint-disable-next-line react/prop-types
const LoginPage = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [color, setColor] = useState("white");
    const { setLoggedIn, setAuthUser } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const credentials = { username: username, password: password };
        fetchLogin(credentials)
            .then((response) => {
                setLoggedIn(response.data);
                setAuthUser(credentials.username);
                sessionStorage.setItem("user", credentials.username);
                setColor("red");
                navigate("/user/feed/reasonOfVisit", { replace: true });
            }).then(
                fetchLocation().then(console.log("here"))
            )
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.error(error);
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <TopBar />
            <Box className={classes.outerContainer}>
                <img
                    src={foodBG}
                    alt="food-background"
                    // style={{maxWidth: "100%", maxHeight: "%100"}}
                    className={classes.image}
                />
                <Container className={classes.container}>
                    <form onSubmit={handleSubmit}>
                        <Box className={classes.formContainer}>
                            <TextField
                                className={classes.TextField}
                                label="UserName"
                                type="username"
                                value={username}
                                id="outlined-required"
                                onChange={(event) => setUsername(event.target.value)}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                className={classes.TextField}
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                fullWidth
                                margin="normal"
                            />
                            <Typography
                                color="textPrimary"
                                style={{ color: color }}
                                className={classes.errorMessage}
                            >
                                The username or the password is wrong. Please try again.
                            </Typography>
                            <Button type="submit" variant="contained" color="primary">
                               Login
                            </Button>
                        </Box>
                    </form>
                </Container>
                {/* </Box> */}
                <Footer/>
            </Box>
        </ThemeProvider>
    );
};

export default LoginPage;
