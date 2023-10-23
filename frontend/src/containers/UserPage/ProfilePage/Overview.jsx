/* eslint-disable */
import {
    Box,
    ThemeProvider,
    Typography,
    makeStyles
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import theme from "../../../themes/theme";
import { Star } from "@mui/icons-material";
import { fetchUserReviews } from "../../../api/restaurant";

const useStyles = makeStyles(() => ({
    paperContainer: {
        position: "relative",
        overflow: "hidden",
        objectFit: "cover",
        display: "flex",
        flexDirection: "column",
        padding: 10
    },
    header1: {
        color: theme.palette.primary.main,
        fontSize: 70
    },
    header2: {
        color: theme.palette.primary.main,
        fontSize: 30,
        marginTop: 0
    },
    header: {
        color: theme.palette.darkBlue.main,
        fontSize: 20,
        fontStyle: 'bold',
        borderBottom: "1px solid",
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
    reviewRating: {
        display:"flex",
        flexDirection: "row"
    },
    star: {
        color: theme.palette.blue.main
    },
    review: {
        display:"flex",
        maxWidth: '120px',
        flexDirection: "column",
        border:"1px solid",
        borderRadius:8,
        borderColor: theme.palette.darkBlue.main,
        padding: 10,
        margin: 10,
        // overflow: "scroll"
    },
    userReview:{
        display:"flex",
        maxHeight: "50vh",
        width: "100%",
        flexWrap: "wrap",
        overflow: "scroll",
        border: '5px solid',
        borderRadius: 10,
        borderColor: theme.palette.secondary.main
    },
}));


const Overview = () => {
    const classes = useStyles();
    const [review, setReview] = useState([]);
    const renderReviews = () => {
        if (review.length > 0) {
            return review.map((review, index) => (
                <Box key={index} className={classes.review}>
                    <Typography variant="h1" className={classes.header}>{review.restaurant_name}</Typography>
                    <Box className={classes.reviewRating}>
                        <Typography>Ambiance: </Typography>
                        <Star className={classes.star} />
                        <Typography>{review.ambiance_rating}</Typography>
                    </Box>
                    <Box className={classes.reviewRating}>
                        <Typography>Taste: </Typography>
                        <Star className={classes.star} />
                        <Typography>{review.taste_rating}</Typography>
                    </Box>
                    <Box className={classes.reviewRating}>
                        <Typography>Service: </Typography>
                        <Star className={classes.star} />
                        <Typography>{review.service_rating}</Typography>
                    </Box>
                    <Box className={classes.reviewRating}>
                        <Typography>Overall: </Typography>
                        <Star className={classes.star} />
                        <Typography>{review.overall_rating}</Typography>
                    </Box>
                    <Typography>{review.comment}</Typography>
                </Box>
            ));
        } else {
            return (
                <Box className={classes.headers}>
                    <Typography sx={{}} className={classes.reviewText}>No Reviews Found</Typography>
                </Box>
            )
        }
    };

    const handleReviews = async () => {
        // const data = { user_id: id };
        await fetchUserReviews().then(response => {
            setReview(response.data);
        }
        );
    }

    useEffect(() => {
        handleReviews();
    }, [])
    

    return (
        <ThemeProvider theme={theme}>
            <Box className={classes.paperContainer}>
                <Typography variant="h2" className={classes.header2}>
                    Past Visits
                </Typography>
                <Box overflow="scroll" className={classes.userReview}>
                    {renderReviews()}
                </Box>
            </Box>
        </ThemeProvider>
    );
}


export default Overview;