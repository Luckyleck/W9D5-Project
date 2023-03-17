import React from "react";
import { NavLink } from "react-router-dom"
import Gallery from "./Gallery";

function GalleryNavigation(props) {
    // console.log(props)

    const {galleries} = props;
    console.log(galleries)

    const galleryLinks = galleries.map((gallery) => {
        return <Gallery galleryId={gallery.gallerynumber}/>
    })

    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink to="/">
                index Link
            </NavLink>
            {galleryLinks}
        </nav>
    );
}

export default GalleryNavigation;