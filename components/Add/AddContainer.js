import React, { useState } from "react";
import SearchAlbumToAdd from "./SearchAlbumToAdd";

const AddContainer = () => {
  const [visible, setToVisible] = useState(true);
  return (
    <>
      <SearchAlbumToAdd setToVisible={setToVisible} />
      {visible && <div>show 4 recent albums</div>}
    </>
  );
};

export default AddContainer;
