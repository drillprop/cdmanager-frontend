import React, { useState } from "react";
import FilterCollection from "./FilterCollection";
import Pagination from "./Pagination";
import Albums from "./Albums";

const CollectionContainer = () => {
  const [recentAlbumsVisible, showRecentAlbums] = useState(true);
  return (
    <>
      <Pagination />
      <FilterCollection showRecentAlbums={showRecentAlbums} />
      {recentAlbumsVisible && <Albums />}
    </>
  );
};

export default CollectionContainer;
