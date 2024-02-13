// import React from 'react';
// import ImageUploader from './ImageUploader.js';
// import "./App.css";
// const App = () => {
//   return (
//     <div>
//       <h1>Image Uploader</h1>
//       <ImageUploader />
//     </div>
//   );
// };

// export default App;

// App.js
import React from 'react';
import ImageUploader from './ImageUploader.js';
import "./App.css"; // Import the CSS file

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Image Uploader</h1>
      </header>
      <div className="image-uploader-container">
        <ImageUploader />
      </div>
    </div>
  );
};

export default App;
