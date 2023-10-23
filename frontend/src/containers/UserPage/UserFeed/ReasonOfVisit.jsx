// /* eslint-disable */
import { Box, Button, TextField, ThemeProvider, Typography, makeStyles } from "@material-ui/core";
import { Autocomplete } from "@mui/material";
import React, { useState } from "react";
import theme from "../../../themes/theme";
import UserNavBar from "../../../layouts/UserPage/UserNavbar";
import { useNavigate } from "react-router-dom";
import { postReasonOfVisit } from "../../../api/restaurant";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
        minHeight:"100vh",
        paddingTop: "20vh",
        backgroundColor: theme.palette.beige.main
    },
    header: {
        color: theme.palette.darkBlue.main,
        fontSize: 32,
        fontWeight: "bold"
    },
    label: {
        fontSize: 32,
        color: theme.palette.primary.main,
        fontWeight: "bold"
    },
    autocplt: {
        padding:3,
        border: "2px solid",
        borderColor: theme.palette.primary.main,
        borderRadius: 10,
        width:"30vw",
        fontSize: 32,
        fontWeight: "bold"
    },
    button: {
        marginTop:10
    }
}));


const ReasonVisit = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const options = [
        'Family', 'Guest', 'Work', 'Date', 'Friend'
    ]
    const [reason, setReason] = useState(options[0]);

    const handleChange = (event, newReason) => {
        setReason(newReason);

    }

    const handleClick = (event) => {
        event.preventDefault()
        const data = { reason_of_visit: reason } 
        postReasonOfVisit(data).then(
            navigate("/user/feed")
        // eslint-disable-next-line no-console
        ).catch(err=>console.error(err))
    
    }

    
    return(
        <ThemeProvider theme={theme}>
            <UserNavBar/>
            <Box className={classes.container}>
                <Typography className={classes.header}>
                    Please tell us your purpose of visit for improved recommendations.
                </Typography>
                <Autocomplete
                    value={reason}
                    // disablePortal
                    onChange={handleChange}
                    id="reason"
                    className={classes.autocplt}
                    options={options} 
                    renderInput={(params) => 
                        <TextField {...params} 
                            label="Select here" 
                            InputLabelProps={{
                                style: {  color: theme.palette.primary.main,
                                    fontSize: 24
                                } } }
                            className={classes.label} />}
                />
                <Button
                    color={"primary"} 
                    variant="contained"
                    className={classes.button}
                    onClick={handleClick}>
                    Submit
                </Button>
            </Box>
        </ThemeProvider>
    )
}

export default ReasonVisit;