import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import image1 from "../assets/img/covers/cover4.jpg";
// import Carousel from "react-multi-carousel";
import Typed from 'react-typed';

const useStyles = makeStyles((theme) => ({
    cover: {
        display: "relative",
    },
    coverImage: {
        backgroundImage: `url(${image1})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginBottom: "20px",
        boxShadow: "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)"
    },
    coverText: {
        position: "absolute",
        top: "200px",
        left: "50%",
        textAlign: "center",
        transform: "translate(-50%, -50%)",
        [theme.breakpoints.up('sm')]: {
            top: "250px",
        },
    },
    text: {
        color: "black",
        fontWeight: 'bold',
        fontSize: "2.5rem",
        lineHeight: 1,
        fontFamily: 'Righteous, cursive',
        [theme.breakpoints.up('sm')]: {
            fontSize: "3.5rem",
        },
    },
}));

function Cover() {
    const classes = useStyles();
    return (
        <div className={classes.cover}>
            <div className={classes.coverImage}/>
            <div className={classes.coverText}>
                <Typography className={classes.text}>
                    Subaru Performance and Auto Parts
                </Typography>
            </div>
        </div>
    );
}

export default Cover;
