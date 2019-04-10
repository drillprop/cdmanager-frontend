import React, { useState } from "react";
import SearchAlbumToAdd from "./SearchAlbumToAdd";
import RecentAlbums from "./RecentAlbums";

const AddContainer = () => {
  const [visible, setToVisible] = useState(true);
  return (
    <>
      <SearchAlbumToAdd setToVisible={setToVisible} />
      {visible && <RecentAlbums />}
    </>
  );
};

export default AddContainer;
