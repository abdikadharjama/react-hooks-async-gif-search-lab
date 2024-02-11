import React, { useState } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  const fetchGIFs = (query = "cats") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=8CKQuUQ4WR8TZZsVxqxrs0nc87rfafzh&rating=g`)
      .then(response => response.json())
      .then(data => setGifs(data.data.slice(0, 3)));
  };

  return (
    <div>
      <GifSearch fetchGIFs={fetchGIFs} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
