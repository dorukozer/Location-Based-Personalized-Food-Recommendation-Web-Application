/*eslint-disable*/
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  makeStyles,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import theme from "../../themes/theme";
import TopBar from "../../layouts/LandingPage/TopBar";
import { fetchRegister } from "../../api/authentication";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { fetchLocation } from "../../api/location.js";

const useStyles = makeStyles((theme) => ({
  outerContainer: {
    justifyContent: "space-between",
    height: "100vh",
    width: "100vw",
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    margin: "normal",
    marginBottom: "2",
    marginTop: "2",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 2,
    marginBottom: 20,
  },
  container: {
    maxWidth: 300,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 2,
    margin: "auto",
    height: "auto",
    border: "1px solid #ccc",
    borderRadius: 4,
    backgroundColor: "#ffffff",
  },
  splashScreen: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  errorMessage: {
    fontSize: 10,
  },
}));



const SignUpPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [color, setColor] = useState("white");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { setLoggedIn, setAuthUser } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle login logic here, e.g. submit form data to server
    const credentials = {
      username: username,
      email: email,
      password: password,
    };
    fetchRegister(credentials)
      .then((response) => {
        if (response.data) {
          setLoggedIn(true);
          setAuthUser(credentials.username);
          sessionStorage.setItem("user", credentials.username);
          navigate("/user/newuser");
        } else {
          setColor("red");
        }
      }).then(
        fetchLocation().then()
      ) 
      .catch((error) => {
        console.error(error);
        setColor("red");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.outerContainer}>
        <TopBar />
        <Container className={classes.container}>
          <form onSubmit={handleSubmit}>
            <Box className={classes.formContainer}>
              <TextField
                className={classes.textField}
                label="UserName"
                type="username"
                value={username}
                id="outlined-required-username"
                onChange={(event) => setUsername(event.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                className={classes.textField}
                label="Email"
                type="email"
                value={email}
                id="outlined-required-email"
                onChange={(event) => setEmail(event.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                className={classes.textField}
                label="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                fullWidth
                margin="normal"
              />
              <Typography
                className={classes.errorMessage}
                style={{ color: color }}
              >
                Username or email has already been used.
              </Typography>
              <Button type="submit" variant="contained" color="primary">
                Register
              </Button>
            </Box>
          </form>
        </Container>
        {/* </Box> */}
      </Box>
    </ThemeProvider>
  );
};

export default SignUpPage;
