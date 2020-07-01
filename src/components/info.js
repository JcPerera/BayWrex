import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Grid,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography
} from '@material-ui/core';

import image from "../assets/img/covers/cover1.jpg";
import image2 from "../assets/img/covers/cover2.jpg";
import image3 from "../assets/img/covers/cover6.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "40px",
    },
    cardRoot: {
        height: "100%",
    },
    media: {
        height: 140,
    },
}));

function Info() {
    const classes = useStyles();
    return (
        <Container>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.cardRoot} elevation={3}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={image}
                                    title="Well Experienced"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Well Experienced
          </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Over years of auto experience we are dedicated to finding high quality replacement and the right part for each of our customers.
          </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.cardRoot} elevation={3}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={image2}
                                    title="We Have You Covered"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        We Have You Covered
          </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Whether you're coming in for a new motor, bumper, or new lights, we promise that you will be completely satisfied with your replacement parts. We provide warranties on all our products to ensure your peace of mind. l our products to ensure your peace of mind.
          </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Card className={classes.cardRoot} elevation={3}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={image3}
                                    title="Our Quality Promise"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Our Quality Promise
          </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        We're committed to providing a stress-free experience to both new and returning customers. Our shop only sources parts from tested genuine Subaru second hand or brand new genuine parts to ensure that your vehicle is always ready to drive.
          </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}

export default Info;
