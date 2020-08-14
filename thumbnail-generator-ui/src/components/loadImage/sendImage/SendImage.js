import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { estructureObject } from "../../../utils/Index";
import { useSelector } from "react-redux";
import axios from "axios";
import "./SendImage.sass";

function SendImage({ valueImageLoad, deleteAllImageHandler }) {
  const [showImage, setShowImages] = useState([]);
  const userData = useSelector((state) => state);
  const sendImages = estructureObject(valueImageLoad);
  sendImages.userData = userData;

  const pushImageHandler = async () => {
    try {
      //Request
      const response = await axios.post(process.env.REACT_APP_URL, {
        arrayImages: sendImages,
      });
      //assign properties
      return response.data.map((image) => {
        const url = image.path;
        image.path = url;
        image.newImages.map((img) => (img.url = image.path));
        setShowImages((showImage) => [...showImage, image.newImages]);
        deleteAllImageHandler();
      });
    } catch (error) {
      alert("Error load image");
      return error;
    }
  };

  return (
    <div className="sendimage">
      <Button
        onClick={pushImageHandler}
        style={{ marginTop: "15px", width: "40%" }}
        variant="contained"
        color="secondary">
        Load image
      </Button>
      <div className="sendimage_showimages">
        {showImage
          ? showImage.map((arrayImage) => {
              return (
                <div className="sendimage_showimages__array">
                  {arrayImage.map((image, index) => {
                    return (
                      <div key={index}>
                        <h3 style={{ color: "white" }}>{image.name}</h3>
                        <img
                          src={image.url}
                          alt={image.name}
                          className="sendimage_showimages__array__img"
                          style={{
                            width: image.width,
                            height: image.height,
                            objectFit: "contain",
                          }}
                        ></img>
                      </div>
                    );
                  })}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default SendImage;
