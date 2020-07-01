import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Avatar,
    CardHeader,
    CardActions,
    Grid,
    Card,
    CardContent,
    Typography
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import Rating from '@material-ui/lab/Rating';

import image from "../assets/img/faces/avatar.jpg"
import quote from "../assets/img/quotes.png"
import image2 from "../assets/img/faces/kendall.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    cardRoot: {
        height: "100%",
    },
    cardHeader: {
        fontWeight: 700
    },
    avatar: {
        backgroundColor: red[500],
    },
    botQuoteMark: {
        transform: "rotate(180deg)",
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
        fontFamily: 'Righteous, cursive',
    }

}));

function Testimonials() {
    const classes = useStyles();
    return (
        <Container>
            <Typography variant="h4" className={classes.title}>What our customers have to Say</Typography>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Card className={classes.cardRoot} elevation={3}>
                            <CardContent>
                                <CardHeader
                                    classes={{
                                        title: classes.cardHeader
                                    }}
                                    avatar={
                                        <Avatar alt="Callum Kent" src={image} />
                                    }
                                    title="Callum Kent"
                                    subheader="a year ago"

                                />
                                <div className={classes.topQuoteMark}>
                                    <img src={quote} width="30" />
                                </div>
                                <Typography variant="body2" color="textSecondary" component="p" className="review-text">
                                    10/10 service. Always reliable and responsive. Always helped me and my mates out with their cars. Highly recommended
          </Typography>
                                <div className={classes.botQuoteMark}>
                                    <img src={quote} width="30" />
                                </div>
                                <Rating name="read-only" value={5} readOnly />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Card className={classes.cardRoot} elevation={3}>
                            <CardContent>
                                <CardHeader
                                    classes={{
                                        title: classes.cardHeader
                                    }}
                                    avatar={
                                        <Avatar alt="Janaka Perera" src={image2} />
                                    }
                                    title="Shaun Johnson"
                                    subheader="a year ago"

                                />
                                <div className={classes.topQuoteMark}>
                                    <img src={quote} width="30" />
                                </div>
                                <Typography variant="body2" color="textSecondary" component="p" className="review-text">
                                    Bought some engine parts for my WRX from this place and its absolutely fair pricing also Super customer service.
                                    Plus the owner helped me to fixed a leak which was from turbo boost lines. Highly recommended  place for Subie parts.
          </Typography>
                                <div className={classes.botQuoteMark}>
                                    <img src={quote} width="30" />
                                </div>
                                <CardActions>
                                    <Rating name="read-only" value={5} readOnly />
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}

export default Testimonials;