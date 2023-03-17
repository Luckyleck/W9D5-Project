import harvardArt from './data/harvardArt'
import React from 'react';
import { Route } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView/show';

function App() {

  // console.log(harvardArt);

  // const { slug } = useParams();

  // console.log(slug)
  
  return (
    <>
      <h1>Hello from App</h1>
      <GalleryNavigation galleries={harvardArt.records} />
      <Route exact path="/">
        
      </Route>
      <Route exact path="/galleries/:papaya">
        <GalleryView />
      </Route>
    </>
  );
}

export default App;
