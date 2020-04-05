import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const LoadingSpinner = styled.div`
  background: white;
  color: white;
  font-size: 10px;
  width: 50px;
  height: 50px;
  box-shadow: inset 0 0 0 2px white, inset 0 0 0 17px #333,
    inset 0 0 0 20px white, inset 0 0 0 21px #333;
  margin: 14px auto;
  border: 1px solid #333;
  border-radius: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    !props.isStatic && 'animation: spinner 1000ms linear infinite alternate;'};
  ::after {
    content: '';
    position: absolute;
    opacity: 0.1;
    background-color: white;
    width: 42px;
    height: 8px;
    animation: rotate 500ms linear infinite;
    @keyframes rotate {
      to {
        transform: rotate(-360deg);
      }
    }
  }
  @keyframes spinner {
    from {
      transform: translateX(40px);
    }
    to {
      transform: translateX(-40px);
    }
  }
`;

const Loading = ({ loading, withDelay, isStatic }) => {
  const [showLoading, setLoading] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (loading) setLoading(true);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [loading]);

  if (withDelay)
    return showLoading ? <LoadingSpinner isStatic={isStatic} /> : null;
  else return <LoadingSpinner isStatic={isStatic} />;
};
export default Loading;
