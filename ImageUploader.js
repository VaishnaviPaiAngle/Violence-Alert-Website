import React, { useState } from 'react';

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
        id="imageInput"
      />
      <label htmlFor="imageInput">
        <button>Select Image</button>
      </label>
      {image && (
        <div>
          <h2>Preview:</h2>
          <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;