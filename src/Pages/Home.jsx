import React, { useRef, useState } from "react";

const Home = () => {
  const [playerList, setPlayerList] = useState([]);
  const videoRef = useRef();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const maxSize = 50 * 1024 * 1024;
      if (selectedFile.size <= maxSize) {
        setPlayerList((prevList) => [...prevList, selectedFile]);
      } else {
        alert("Selected file is too large. Please choose a file up to 50MB.");
        event.target.value = null;
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <input
            ref={videoRef}
            type="file"
            className="d-none"
            accept="video/mp4"
            onChange={handleFileChange}
            maxSize={50 * 1024 * 1024}
          />
          <div>
            <img
              onClick={() => videoRef.current.click()}
              width={200}
              src="https://cdn-icons-png.flaticon.com/512/126/126477.png"
              alt=""
            />
            <h6>Upload your video (up to 50MB)</h6>
          </div>
        </div>
        <div className="col-4">
          <h6>Your Player List</h6>
          <ul>
            {playerList.map((video, index) => (
              <li key={index}>{video.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
