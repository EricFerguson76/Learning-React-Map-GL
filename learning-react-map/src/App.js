import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import './App.css';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiZXJpY2Zlcmd1c29uNzYiLCJhIjoiY2s3eHJ5d3l6MDBnaTNucWUyaDM0aDRmZSJ9.P8jpVy3GF632fMQMTY059g';

function App() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376
  });
  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
  );
}

export default App;
