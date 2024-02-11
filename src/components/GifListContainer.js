import React, { useState } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  const fetchGIFs = (query = "dolphins") => {
    const API_KEY = "YOUR_API_KEY"; // Replace YOUR_API_KEY with your actual Giphy API key
    const URL = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&rating=g&limit=3`;

    fetch(URL)
      .then(response => response.json())
      .then(({data}) => {
        const gifs = data.map(gif => ({ url: gif.images.original.url }));
        setGifs(gifs);
      });
  };

  return (
    <div>
      <GifSearch fetchGIFs={fetchGIFs} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
