import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton, Menu, MenuItem, makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import theme from "../../themes/theme";

const useStyles = makeStyles({
    icon:{
        color: theme.palette.beige.main
    }
});


const MenuIcon = () => {
    const [anchorEl, setAnchorEl] = useState(false);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const classes =  useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logOut = () => {
        sessionStorage.clear();
        navigate("/home");
        setAnchorEl(null);
    };

    const profile = () => {
        handleClose();
        navigate("/user/profile", { replace: true });
    };

    return (
        <>
            <IconButton onClick={handleClick}>
                <AccountCircleIcon className={classes.icon} fontSize="large"/>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                }}
                getContentAnchorEl={null}
            >
                <MenuItem onClick={profile}>Profile</MenuItem>
                <MenuItem onClick={logOut}>Logout</MenuItem>
            </Menu>
        </>
    );
};

export default MenuIcon;
