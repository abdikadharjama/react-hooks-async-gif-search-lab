import React, { useState } from 'react';

function GifSearch({ fetchGIFs }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGIFs(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for GIFs"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default GifSearch;
