/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Box, DialogContent, makeStyles, ThemeProvider, Typography } from "@material-ui/core";
import { Button, Dialog,  Rating, TextField } from "@mui/material";
import { Star } from '@mui/icons-material';
import exampleRes from  '../../../images/exampleRestaurant.jpg';
import { fetchRestaurantReviews, postRestaurantReviews } from "../../../api/restaurant";
import theme from "../../../themes/theme";
import { imagelist } from "../../../api/constants";

import African from '../../../images/CuisineImages/African.jpg'; 
import American from '../../../images/CuisineImages/American.jpg';
import Asian from '../../../images/CuisineImages/Asian.jpg'; 
import Bakery from '../../../images/CuisineImages/Bakery.jpg';
import Bar_Pub_Brewery from '../../../images/CuisineImages/Bar Pub Brewery.jpg';
import Baripg from '../../../images/CuisineImages/Bar.jpg';
import Burgers from '../../../images/CuisineImages/Burgers.jpg';
import Cafeteria from '../../../images/CuisineImages/Cafeteria.jpg';
import Chinese from '../../../images/CuisineImages/Chinese.jpg';
import Coffee from '../../../images/CuisineImages/Coffee.jpg';
import Contemporary from '../../../images/CuisineImages/Contemporary.jpg';
import Dutch from '../../../images/CuisineImages/Dutch.jpg';
import FastFood from '../../../images/CuisineImages/Fast-Food.jpg';
import French from '../../../images/CuisineImages/French.jpg';
import Greek from '../../../images/CuisineImages/Greek.jpg';
import IceCream from '../../../images/CuisineImages/Ice-Cream.jpg';
import International from '../../../images/CuisineImages/International.jpg';
import Italian from '../../../images/CuisineImages/Italian.jpg';
import Japanese from '../../../images/CuisineImages/Japanese.jpg';
import Juice from '../../../images/CuisineImages/Juice.jpg';
import Korean from '../../../images/CuisineImages/Korean.jpg';
import Latin_American from '../../../images/CuisineImages/Latin American.jpg';
import Mexican from '../../../images/CuisineImages/Mexican.jpg';
import Pizzeria from '../../../images/CuisineImages/Pizzeria.jpg';
import Sandwiches from '../../../images/CuisineImages/Sandwiches.jpg';
import Seafood from '../../../images/CuisineImages/Seafood.jpg';
import Steaks from '../../../images/CuisineImages/Steaks.jpg';
import Turkish from '../../../images/CuisineImages/Turkish.jpg';
import Vegetarian from '../../../images/CuisineImages/Vegeterian.jpg';
import Wine from '../../../images/CuisineImages/Wine.jpg';


const useStyles = makeStyles((theme) => ({
    outerbox: {
        display: "inline-flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        gap: 2,
        border: "1px grey",
        borderRadius: 10,
        background: theme.palette.primary.main,
        fontWeight: "bold",
        margin: "10px",
        minWidth: "30vw",
        maxHeight: '22vh'
    },
    content: {
        display: 'flex',
        width: "auto",
        fontWeight: "bold",
        userSelect: "none"
    },
    header: {
        color: theme.palette.beige.main,
        fontWeight: "bold"
    },
    ambiance: {
        color: theme.palette.beige.main,
        fontWeight: "bold"
    },
    image:{
        width: "100%",
        height: "20vh",
        borderRadius:10
    },
    image2:{
        width: "100%",
        borderRadius:10
    },
    contentcontainer:{
        width: "22vw",
        borderRadius:10
    },
    imagecontainer:{
        maxWidth: '15vw', 
        borderRadius:10
    },
    checkbox: {
        paddingRight: "10%"
    },
    dialog: {
        display:"flex",
        flexDirection:"column",
        padding: 10,
        // minWidth: "60vw",
        backgroundColor: theme.palette.beige.main,
        borderRadius: 10
    },
    headers: {
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
        padding: 10
    },
    dialogHeader: {
        color: theme.palette.darkBlue.main,
        fontSize: 46,
        fontWeight: "bold"
    },
    dialogHeader2: {
        color: theme.palette.darkBlue.main,
        fontSize: 32
        // fontWeight: "bold"
    },
    dialogHeader3: {
        color: theme.palette.darkBlue.main,
        fontSize: 24
        // fontWeight: "bold"
    },
    reviewText: {
        color: theme.palette.darkBlue.main,
        fontSize: 16
        // marginLeft: "10vw"
    },
    userReview:{
        display:"flex",
        // justifyContent:"space-between",
        width: "100%",
        // backgroundColor: theme.palette.darkBlue.main,
        flexWrap: "wrap"
    },
    review: {
        display:"flex",
        maxWidth: '120px',
        flexDirection: "column",
        border:"1px solid",
        borderRadius:8,
        borderColor: theme.palette.darkBlue.main,
        padding: 10,
        margin: 10
    },
    reviewRating: {
        display:"flex",
        flexDirection: "row"
    },
    star: {
        color: theme.palette.blue.main
    },
    // button: {
    //     color: theme.palette.darkBlue.main
    // },
    formcontainer: {
        display: "flex",
        flexDirection: "column"
    }

}));

const CreateRestaurant = (props) => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState('../../../images/exampleRestaurant.jpg');
    // eslint-disable-next-line react/prop-types
    // const preference = props.name;
    const { id, name, cuisine, ambiance, rating } = props;
    const [review, setReview] = useState([]);
    const [reviewText, setReviewText] = useState('');

    const [serviceRating, setServiceRating] = useState(0);
    const [tasteRating, setTasteRating] = useState(0);
    const [ambianceRating, setAmbianceRating] = useState(0);

    
    const handleCheckboxClick = () => {
        setChecked(!checked);
        setOpen(true);
        // eslint-disable-next-line react/prop-types, no-console
        // props.onPreferenceChange(preference, !checked);
    };

    const handleClose = () => {
        setChecked(!checked);
        setOpen(false);
    }
    
    // eslint-disable-next-line no-unused-vars
    const handleImages = (imagecuisine) => {
        // Set the new image URL based on your logic or data source
        switch (imagecuisine) {
            case "African":
                return African;
            case "American":
                return American;
            case "Asian":
                return Asian;
            case "Bakery":
                return Bakery;
            case "Bar Pub Brewery":
                return Bar_Pub_Brewery;
            case "Baripg":
                return Baripg;
            case "Burgers":
                return Burgers;
            case "Cafeteria":
                return Cafeteria;
            case "Chinese":
                return Chinese;
            case "Coffee":
                return Coffee;
            case "Contemporary":
                return Contemporary;
            case "Dutch":
                return Dutch;
            case "Fast-Food":
                return FastFood;
            case "French":
                return French;
            case "Greek":
                return Greek;
            case "Ice-Cream":
                return IceCream;
            case "International":
                return International;
            case "Italian":
                return Italian;
            case "Japanese":
                return Japanese;
            case "Juice":
                return Juice;
            case "Korean":
                return Korean;
            case "Latin_American":
                return Latin_American;
            case "Mexican":
                return Mexican;
            case "Pizzeria":
                return Pizzeria;
            case "Sandwiches":
                return Sandwiches;
            case "Seafood":
                return Seafood;
            case "Steaks":
                return Steaks;
            case "Turkish":
                return Turkish;
            case "Vegetarian":
                return Vegetarian;
            case "Wine":
                return Wine;
            default:
                return exampleRes;  // or return a default image if none of the case matches
        }  
    };

    const handleReviews = async () => {
        const data = { restaurant_id: id };
        if(checked) {
            await fetchRestaurantReviews(data).then(response => {
                setReview(response.data)
            }
            );
        } 
    }

    const ambianceArray = JSON.parse(ambiance.replace(/'/g, '"'));
    const renderAmbiance = () => {
        if (Array.isArray(ambianceArray)) {
            return ambianceArray.join(", ");
        } else if (typeof ambianceArray === "string") {
            return ambianceArray;
        } else {
            return "";
        }
    };


    const renderReviews = () => {
        if (review.length > 0) {
            return review.map((review, index) => (
                <Box key={index} className={classes.review}>
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
      

    const handleSubmit = async () =>{
        const data = { restaurant_id: id, 
            ambiance_rating: ambianceRating,
            taste_rating:tasteRating,
            service_rating:serviceRating,
            comment: reviewText };

        if (checked) {
            postRestaurantReviews(data)
                // .then((response) => console.log(response))
                // eslint-disable-next-line no-console
                .catch(err=>console.error(err));
        }
    };


    const handleReviewChange = (event) => {
        const inputText = event.target.value;
        const words = inputText.split(' ');
        if (words.length <= 200) {
            setReviewText(inputText);
        }
    };

    const handleServiceRatingChange = (event, value) => {
        setServiceRating(value);
    };
    
    const handleTasteRatingChange = (event, value) => {
        setTasteRating(value);
    };
    
    const handleAmbianceRatingChange = (event, value) => {
        setAmbianceRating(value);
    };

    useEffect(() => {
        handleReviews();
        setImage(handleImages(cuisine));
    }, [checked]);
    

    return (
        <ThemeProvider theme={theme}>
            <Box
                className={classes.outerbox}
                borderColor="darkBlue.main"
                // gap={2}
                onClick={handleCheckboxClick}
            >
                <Box className={classes.content}  borderRadius={16}>
                    <Box className={classes.imagecontainer}>
                        <img src={image} alt="Box Image" className={classes.image}/>
                    </Box>
                    <Box p={2} className={classes.contentcontainer}>
                        <Typography variant="h6" className={classes.header}>{name}</Typography>
                        <Typography variant="subtitle1" className={classes.ambiance}>{cuisine}</Typography>
                        <Typography variant="body2" className={classes.ambiance}>{renderAmbiance()}</Typography>
                        <Rating value={rating/2} precision={0.5}  readOnly />
                    </Box>
                </Box>
            </Box>
            <Dialog open={open} onClose={handleClose} PaperProps={{
                style: {
                    borderRadius: 10 
                }
            }}
            >
                <DialogContent className={classes.dialog}>
                    <img src={image} alt="Box Image" sx={{
                        // width: "100%",
                        borderRadius:10
                    }} className={classes.image2}
                    />
                    <Box className={classes.dialog}>
                        <Box className={classes.headers}>
                            <Typography variant="h1" className={classes.dialogHeader}>
                                {name}
                            </Typography>
                            <Typography  variant="h2" className={classes.dialogHeader2}>
                                {cuisine}
                            </Typography>
                            <Typography className={classes.dialogHeader3}>
                                {renderAmbiance()}
                            </Typography>
                            <Rating value={rating} precision={0.5}  max={10} readOnly />
                        </Box>
                        <Typography className={classes.dialogHeader2}>Reviews</Typography>
                        <Box className={classes.userReview}>
                            {renderReviews()}
                        </Box>
                        <Box className={classes.formcontainer}>
                            <Typography className={classes.dialogHeader2}>
                            Leave a review
                            </Typography>
                            <Box sx={{
                                flexDirection:"column",
                                display: "flex"
                            }}>
                                <Box sx={{
                                    flexDirection:"row",
                                    display: "flex",
                                    justifyContent: "space-between"
                                }}>
                                    <Box>
                                        <Typography className={classes.reviewText}>
                                        Rate Service
                                        </Typography>
                                        <Rating
                                            name="service-rating"
                                            value={serviceRating}
                                            onChange={handleServiceRatingChange}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography className={classes.reviewText}>
                                        Rate Taste
                                        </Typography>
                                        <Rating
                                            name="taste-rating"
                                            value={tasteRating}
                                            onChange={handleTasteRatingChange}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography className={classes.reviewText}>
                                        Rate Ambiance
                                        </Typography>
                                        <Rating
                                            name="ambiance-rating"
                                            value={ambianceRating}
                                            onChange={handleAmbianceRatingChange}
                                        />
                                    </Box>
                                </Box>
                                <TextField
                                    label="Write a Review"
                                    variant="outlined"
                                    multiline
                                    rows={3}
                                    value={reviewText}
                                    onChange={handleReviewChange}
                                />
                                <Button 
                                    type="submit"
                                    variant="contained"
                                    sx={{ backgroundColor: theme.palette.primary.main, marginTop: 1 }}
                                    onClick={handleSubmit}>
                                        Submit Review
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
        </ThemeProvider>
    );
};

export default CreateRestaurant;
