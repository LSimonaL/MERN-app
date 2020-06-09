import React from 'react';
import img from 'react-bootstrap';
import { Card, Container, Col, Row, Image } from "react-bootstrap";
// import Gallery from 'react-grid-gallery';


export const UnsplashImage = ({ url, key }) => {


    return (
        // <div className="container">
        //     <img key={key} src={url} alt="" />
        // </div>

        <Col className="mb-2" md={4}>
            <Image className="images" key={key} src={url} alt="" />
        </Col>
    )
}