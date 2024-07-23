import React from 'react';
import "../../css/image_grid.scss";
import ImageGrid from '../plugin/ImageGrid';
import { useLocation } from "react-router-dom"

function Release() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Magic Straw Berry Sound</h1>
      </header> */}
      <ImageGrid />
    </div>
  );
}

export default Release;