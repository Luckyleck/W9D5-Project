import React from "react";
import { NavLink } from "react-router-dom"

const Gallery = (prop) => {
    console.log(prop)
    return (
        <NavLink key={prop.key} to={`/galleries/${prop.galleryId}`}>{prop.galleryName}</NavLink>
    )
}

export default Gallery;