import React, { useState } from "react";
import "./App.scss";
import data from "./components/AllPictures.js";
import PictureLibrary from "./components/PictureLibrary";
import PictureView from "./components/PictureView";

function App() {
  const [pictures, setPictures] = useState(data());
  return (
    <div className="App">
      <h1 id="title">Beautiful pictures</h1>
      <div className="containerAll">
        {pictures.map((picture) => {
          return (
            <PictureLibrary
              name={picture.name}
              source={picture.source}
              desc={picture.desc}
              id={picture.id}
              key={picture.id}
              setPictures={setPictures}
              pictures={pictures}
            />
          );
        })}
      </div>

      <PictureView pictures={pictures} />
    </div>
  );
}

export default App;
