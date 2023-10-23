import React, { useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import theme from "../../../themes/theme";
import Checkbox from "@mui/material/Checkbox";

const useStyles = makeStyles((theme) => ({
    outerButton: {
        display: "inline-flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        gap: 2,
        border: "1px grey",
        borderRadius: 10,
        background: theme.palette.primary.main,
        fontWeight: "bold",
        paddingLeft: "10px",
        margin: "10px"
    },
    content: {
        color: theme.palette.beige.main,
        fontWeight: "bold",
        userSelect: "none",
        fontStyle: "italic"
    },
    checkbox: {
        paddingRight: "10%"
    }
}));

const CreatePreference = (props) => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    // eslint-disable-next-line react/prop-types
    const preference = props.name;
 
    const handleCheckboxClick = () => {
        setChecked(!checked);
        // eslint-disable-next-line react/prop-types
        props.onPreferenceChange(preference, !checked);
    };


    return (
    // <ThemeProvider theme={theme}>
        <Box
            className={classes.outerButton}
            borderColor="darkBlue.main"
            gap={2}
            onClick={handleCheckboxClick}
        >
            <Typography className={classes.content}>{preference}</Typography>
            <Checkbox
                checked={checked}
                className={classes.checkbox}
                sx={{
                    color: theme.palette.beige.main,
                    "&.Mui-checked": {
                        color: theme.palette.beige.main
                    }
                }}
            />
        </Box>
    // </ThemeProvider>
    );
};

export default CreatePreference;
