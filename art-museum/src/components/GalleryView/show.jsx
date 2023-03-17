import React from "react";
import { useParams } from 'react-router-dom'

const GalleryView = (prop) => {
    const slug = useParams();
    console.log(slug)


    return (
        <h2>Hello Gallery View Show Alex's mom</h2>
    )
}

export default GalleryView;