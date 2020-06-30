import React from 'react';
import image from "../assets/img/faces/avatar.jpg"
import image2 from "../assets/img/faces/kendall.jpg"
import { Container } from '@material-ui/core';

function Testimonials() {
    return (
        <Container>
            <div className="review-container">
                <div className="box">
                    <div className="imgBox">
                        <img width="120px" height="120px" src={image}></img>
                    </div>
                    <p>Dolore ipsum officia labore dolore magna cillum amet commodo eu excepteur mollit. Voluptate enim dolor cillum culpa aliquip consequat pariatur. Incididunt fugiat aliqua do enim anim officia proident.</p>
                    <h4>Some one famous</h4>
                </div>
                <div className="box">
                    <div className="imgBox">
                        <img width="120px" height="120px" src={image2}></img>
                    </div>
                    <p>Dolore ipsum officia labore dolore magna cillum amet commodo eu excepteur mollit. Voluptate enim dolor cillum culpa aliquip consequat pariatur. Incididunt fugiat aliqua do enim anim officia proident.</p>
                    <h4>Some one famous</h4>
                </div>
            </div>
        </Container>
    );
}

export default Testimonials;
