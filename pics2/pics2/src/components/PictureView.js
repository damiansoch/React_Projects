import React from "react";
const PictureView = ({ pictures }) => {
  let pSource;
  pictures.map((picture) => {
    if (picture.active === true) {
      pSource = picture.source;
    }
  });
  return (
    <div className="largePicture">
      <div className="largePictureContainer">
        <img src={pSource} alt="" />
      </div>
    </div>
  );
};

export default PictureView;
