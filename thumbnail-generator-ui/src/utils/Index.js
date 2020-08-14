const { v4: uuid } = require("uuid");

function previewImage(event) {
  let reader = new FileReader();
  let file = event[0];
  reader.readAsDataURL(file);

  if (file.type === "image/jpeg" || file.type === "image/png") {
    reader.onload = function () {
      let preview = document.getElementById("preview");
      let div = document.createElement("div");
      let image = document.createElement("img");
      image.src = reader.result;
      file.data = reader.result;
      image.className = "loadimage__preview__image";
      image.id = uuid();
      file.id = image.id;
      div.id = "preview_images";
      div.className = "preview_images";
      preview.append(div);
      div.append(image);
    };
    return file;
  } else {
    alert("Error en la extension del archivo");
  }
}

function estructureObject(images) {
  const imageData = images.map((image) => {
    return (estructureObject = {
      path: image.data,
      size: image.size,
      type: image.type,
    });
  });
  return imageData;
}

module.exports = {
  previewImage,
  estructureObject,
};
