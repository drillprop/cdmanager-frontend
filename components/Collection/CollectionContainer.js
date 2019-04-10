import React, { useState } from "react";
import FilterCollection from "./FilterCollection";
import Pagination from "./Pagination";
import RecentAlbums from "./RecentAlbums";

const CollectionContainer = () => {
  const [recentAlbumsVisible, showRecentAlbums] = useState(true);
  return (
    <>
      <Pagination />
      <FilterCollection showRecentAlbums={showRecentAlbums} />
      {recentAlbumsVisible && <RecentAlbums />}
    </>
  );
};

export default CollectionContainer;
