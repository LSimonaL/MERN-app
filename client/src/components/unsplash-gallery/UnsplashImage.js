import React from 'react';
import img from 'react-bootstrap';
import { Card, Container } from "react-bootstrap";


// const Img = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

export const UnsplashImage = ({ url, key }) => {
    return (
        // <div className="container">
        //     <img key={key} src={url} alt="" />
        // </div>

        <Container className="d-flex align-items-center">
            <Card.Body className="">
                <img key={key} src={url} alt="" />
            </Card.Body>
        </Container>
    )
}