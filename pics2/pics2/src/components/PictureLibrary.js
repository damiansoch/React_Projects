import React from "react";
const PictureLibrary = ({ name, desc, id, source, setPictures, pictures }) => {
  desc = desc.slice(0, 250) + " ...";
  const pictureSelectHandler = () => {
    const newPictures = pictures.map((picture) => {
      if (picture.id === id) {
        return { ...picture, active: true };
      } else {
        return { ...picture, active: false };
      }
    });
    setPictures(newPictures);
  };
  return (
    <div className="container">
      <h2>{name}</h2>
      <div className="imgContainer">
        <img
          src={source}
          alt="Pic for download"
          onClick={pictureSelectHandler}
        />
      </div>
      <h6>{desc}</h6>
    </div>
  );
};
export default PictureLibrary;
