import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UnsplashImage } from './UnsplashImage'

function Gallery() {
    const [images, setImage] = useState([]);

    useEffect(() => {
        fetchImages();
    }, [])

    const fetchImages = (count = 20) => {
        const apiRoot = "https://api.unsplash.com";
        const accessKey = process.env.REACT_APP_ACCESS_KEY;


        axios
            .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}&query=cities`)
            .then(res => {
                setImage([...images, ...res.data]);
                console.log(res.data);
            })
    }


    return (
        <div>
            <h3 className="text-center">Discover</h3>
            <div>

                <div
                    dataLength={images.length}
                    next={fetchImages}
                    hasMore={true}
                >
                    <div class="row">
                        {images.map(image => (
                            <UnsplashImage url={image.urls.thumb} key={image.id} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Gallery;
