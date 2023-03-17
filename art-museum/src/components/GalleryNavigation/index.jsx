import React from "react";
import { NavLink } from "react-router-dom";
import Gallery from "./Gallery";
import './GalleryNavigation.css';

function GalleryNavigation(props) {
    // console.log(props)

    const {galleries} = props; // galleries comes from prop
    // console.log(galleries)

    const galleryLinks = galleries.map((gallery) => {
        return <Gallery key={gallery.gallerynumber} galleryId={gallery.gallerynumber} galleryName={gallery.name}/>
    })

    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink to="/" key="asdfasf">
                index Link
            </NavLink>
            {galleryLinks}
        </nav>
    );

    // To change URL
}

export default GalleryNavigation;