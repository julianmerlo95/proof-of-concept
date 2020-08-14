import React, { useState, useCallback } from "react";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import SendImage from "./sendImage/SendImage";
import { useDropzone } from "react-dropzone";
import { previewImage } from "../../utils/Index";
import { useDispatch } from "react-redux";
import { userData } from "../../redux/actions/index";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoadImage.sass";

function LoadImage() {
  const [valueImageLoad, setValueImageLoad] = useState([]);
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  //Drag image or select image
  const onDrop = useCallback( (file) => {
    const valueImage = previewImage(file);
    if (valueImage)
      setValueImageLoad((arrayImage) => [...arrayImage, valueImage]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  //Delete image
  const deleteImageHandler = (event) => {
    const id = event.target.id;
    const image = document.getElementById(id);
    valueImageLoad.find((img) => {
      if (img.id === id) {
        const filtredData = valueImageLoad.filter((item) => item.id !== id);
        setValueImageLoad(filtredData);
        image.remove();
      }
    });
  };

  const deleteAllImageHandler = () => {
    const seccionImage = document.getElementById("preview_images");
    setValueImageLoad([]);
    return seccionImage.remove();
  };

  //Load user in redux
  if (user) {
    dispatch(userData(user));
  }

  return (
    isAuthenticated && (
      <div className="loadimage">
        <Navbar />
        <Header />
        <div className="loadimage__drag" {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive 
          ? 
            <h2 className="loadimage__drag__text-active">
              ¡¡¡The image is here!!!
            </h2>
          : 
            <h2 className="loadimage__drag__text-noactive">
              ¡Drag some image here, or click here for select file!
            </h2>
          }
        </div>
        <h4 className="loadimage__quantity__text">
          Quantity images loads:
          {valueImageLoad.length}
        </h4>
        <div
          id="preview"
          className="loadimage__preview"
          onClick={(event) => deleteImageHandler(event)}></div>
        <>
          <SendImage
            valueImageLoad={valueImageLoad}
            deleteAllImageHandler={deleteAllImageHandler}/>
        </>
      </div>
    )
  );
}

export default LoadImage;
