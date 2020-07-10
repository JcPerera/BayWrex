import React, {useEffect,useRef} from 'react';
import Swiper from 'swiper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import image from "../assets/img/faces/camp.jpg"
import image1 from "../assets/img/faces/avatar.jpg"
import image2 from "../assets/img/faces/kendall.jpg"
import image3 from "../assets/img/faces/marc.jpg"
import image4 from "../assets/img/faces/christian.jpg"
import image5 from "../assets/img/faces/card-profile1-square.jpg"
import image6 from "../assets/img/faces/card-profile4-square.jpg"

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: "center",
        marginBottom: "20px",
        fontFamily: 'Righteous, cursive',
    }
}));

function Gallery() {
    const classes = useStyles();
    const swiper = useRef(null)
    useEffect(() => {
        swiper.current = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            autoplay: {
                depaly: 2500,
                disableOnInteraction: false
            },
            coverflowEffect: {
                rotate: 20,
                stretch: 0,
                depth:200,
                modifier:1,
                slideShadows: true
            },
        })
    }, [])
    return (
        <>
        <Typography variant="h4" className={classes.title}>
            Take a look for your self
          </Typography>
        <div className="swiper-body">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                <div className="swiper-slide" ><img src={image}  alt="subaru car" height="350px" width="350px"></img></div>
                    <div className="swiper-slide" ><img src={image1} alt="subaru car" height="350px" width="350px"></img></div>
                    <div className="swiper-slide" ><img src={image2} alt="subaru car" height="350px" width="350px"></img></div>
                    <div className="swiper-slide" ><img src={image3} alt="subaru car" height="350px" width="350px"></img></div>
                    <div className="swiper-slide" ><img src={image4} alt="subaru car" height="350px" width="350px"></img></div>
                    <div className="swiper-slide" ><img src={image5} alt="subaru car" height="350px" width="350px"></img></div>
                    <div className="swiper-slide" ><img src={image6} alt="subaru car" height="350px" width="350px"></img></div>
                    
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
        </>
    );
}

export default Gallery;
