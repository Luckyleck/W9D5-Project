import React from "react";
import { NavLink } from "react-router-dom"

const Gallery = (prop) => {
    // console.log(prop)
    console.log(prop)
    return (
        <li>
            <NavLink to={`/galleries/${prop.galleryId}`}>{prop.galleryName}</NavLink>
        </li>
    )
}

export default Gallery;