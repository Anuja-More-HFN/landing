import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import "../styles/info.scss";

function ImageAndInfoBlock({ title, description, imageSrc, imageFirst }) {
  return (
    <div className="infoWrapper container py-5">
      <div className="row">
        {imageFirst && (
          <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
            <Image
              src={imageSrc}
              width={200}
              height={200}
              alt="placeholder image"
              className="image_size"
            />
          </div>
        )}
        <div className="col-lg-6 col-md-12 py-10 px-5 my-5">
          <h2 className="d-flex align-items-start justify-content-start info_title">
            {title}
          </h2>
          <p className="d-flex align-items-center justify-content-center text_styles">
            {description}
          </p>
        </div>
        {!imageFirst && (
          <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
            <Image
              src={imageSrc}
              width={200}
              height={200}
              alt="placeholder image"
              className="image_size"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageAndInfoBlock;
ImageAndInfoBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageFirst: PropTypes.bool.isRequired,
};
