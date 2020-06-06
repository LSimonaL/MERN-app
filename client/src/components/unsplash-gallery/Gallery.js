import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import UnsplashImage from './UnsplashImage'

function Gallery() {
    const [images, setImage] = useState([]);

    useEffect(() => {
        fetchImages();
    }, [])

    const fetchImages = (count = 10) => {
        const apiRoot = "https://api.unsplash.com";
        const accessKey = process.env.ACCESS_KEY;

        axios
            // .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
            .get(`https://api.unsplash.com/photos/random?client_id=hpVYipif0W61bT9KNf5R9ZzOKBvpyom83VbcKaHhrzM&count=10`)
            .then(res => {
                setImage([...images]);
                console.log(res.data);
            })
        // axios
        //     .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
        //     .then(res => {
        //         // setImage([...images, ...res.data]);
        //         console.log(res.data);
        //     })
    }


    return (
        <div>
            <h3>Gallery</h3>

        </div>
    );
}

export default Gallery;
