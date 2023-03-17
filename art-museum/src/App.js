import harvardArt from './data/harvardArt'
import React from 'react';

import GalleryNavigation from './components/GalleryNavigation';

function App() {

  console.log(harvardArt);

  

  return (
    <>
      <h1>Hello from App</h1>
      <GalleryNavigation galleries={harvardArt.records} />
    </>
  );
}

export default App;
