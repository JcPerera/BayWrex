import React from 'react';
import Typed from 'react-typed';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "1.2rem",
        [theme.breakpoints.up('sm')]: {
            fontSize: "2rem",
        },
    }, 
    container: {
        textAlign: "center",
        fontFamily: 'Righteous, cursive',
        marginBottom: "20px"
    }
}));

function Statement() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography className={classes.title}>
                {`We are Specialized in 90's and early 2000 `}
            </Typography>
            <Typography className={classes.title}>
            <Typed
                    strings={[
                        'Subaru Aftermarket Parts',
                        'Subaru Genuine Parts',
                        'Subaru Tuning',
                        'Subaru Services']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
            </Typography>
        </div>
    );
}

export default Statement;
