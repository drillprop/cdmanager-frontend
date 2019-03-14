import React, { useEffect, useState } from 'react';

const Loading = ({ loading }) => {
  const [showLoading, setLoading] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (loading) setLoading(true);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  });
  return showLoading ? <div>Loading...</div> : null;
};
export default Loading;
