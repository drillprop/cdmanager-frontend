import debounce from "lodash.debounce";
import React, { useState } from "react";
import { Query } from "react-apollo";
import { Input } from "../../elements/Form";
import { FILTER_ALBUMS } from "../../utils/queries";

const FilterCollection = ({ showRecentAlbums }) => {
  const [result, setValue] = useState("");
  const filter = debounce(text => {
    text ? showRecentAlbums(false) : showRecentAlbums(true);
    !text && setValue("");
    return setValue(text);
  }, 300);

  return (
    <>
      <p>Show results for: {result}</p>
      <Input
        type='text'
        placeholder='filter'
        onChange={e => filter(e.target.value)}
      />
      {result && (
        <Query query={FILTER_ALBUMS} variables={{ search: result }}>
          {({ data, error, loading }) => {
            if (error) return <p>{error.message}</p>;
            if (loading) return <p>Loading...</p>;
            if (data) {
              console.log(data);
              return null;
            }
          }}
        </Query>
      )}
    </>
  );
};

export default FilterCollection;
