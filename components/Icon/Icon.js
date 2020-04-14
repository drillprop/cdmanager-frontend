import React from 'react';
import { background } from '../../utils/colors';

const Icon = ({ icon, color }) => {
  switch (icon) {
    case 'profile':
      return (
        <svg
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            marginRight: '0.5em',
            height: '2em',
            width: '2em',
          }}
          viewBox='0 0 48 48'
        >
          <circle cx='24' cy='17' fill={color || background} r='6' />
          <path
            d='M24,0C10.745,0,0,10.745,0,24s10.745,24,24,24s24-10.745,24-24S37.255,0,24,0z M35.812,40.113v-3.301  C35.812,30.289,30.523,25,24,25c-6.524,0-11.812,5.289-11.812,11.812v3.301C7.231,36.473,4,30.621,4,24C4,12.954,12.954,4,24,4  s20,8.954,20,20C44,30.621,40.769,36.473,35.812,40.113z'
            fill={color || background}
          />
        </svg>
      );
    case 'cd':
      return (
        <svg
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            marginRight: '0.5em',
            height: '2em',
            width: '2em',
          }}
          enableBackground='new 0 0 48 48'
          viewBox='0 0 48 48'
        >
          <g id='Layer_3'>
            <path
              d='M7.136,7.135c-9.313,9.313-9.313,24.416,0,33.729c9.313,9.313,24.416,9.313,33.729,0   c9.312-9.313,9.312-24.416,0-33.729C31.552-2.178,16.449-2.178,7.136,7.135z M27.073,27.074c-1.697,1.696-4.451,1.699-6.147,0   c-1.697-1.698-1.697-4.451,0-6.149c1.696-1.699,4.45-1.696,6.147,0C28.771,22.624,28.771,25.376,27.073,27.074z M10.141,37.862   c-3.795-3.796-5.705-8.762-5.738-13.731l10.895-0.005c0.033,2.19,0.871,4.366,2.542,6.037c1.701,1.701,3.931,2.553,6.164,2.551   v10.891C18.986,43.604,13.966,41.688,10.141,37.862z M43.601,23.943L32.717,23.99c-0.002-2.225-0.854-4.451-2.556-6.152   c-1.731-1.731-4.011-2.576-6.28-2.541l0.103-10.902c5.022,0,10.048,1.91,13.878,5.742C41.675,13.949,43.584,18.94,43.601,23.943z'
              fill={color || background}
            />
          </g>
        </svg>
      );
    case 'logout':
      return (
        <svg
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            marginRight: '0.5em',
            height: '2em',
            width: '2em',
          }}
          enableBackground='new 0 0 24 24'
          viewBox='0 0 24 24'
        >
          <g id='info' />
          <g id='icons'>
            <g id='exit2'>
              <path
                d='M12,10c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2s-2,0.9-2,2v4C10,9.1,10.9,10,12,10z'
                fill={color || background}
              />
              <path
                d='M19.1,4.9L19.1,4.9c-0.3-0.3-0.6-0.4-1.1-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.4,0.2,0.8,0.4,1.1l0,0c0,0,0,0,0,0c0,0,0,0,0,0    c1.3,1.3,2,3,2,4.9c0,3.9-3.1,7-7,7s-7-3.1-7-7c0-1.9,0.8-3.7,2.1-4.9l0,0C7.3,6.8,7.5,6.4,7.5,6c0-0.8-0.7-1.5-1.5-1.5    c-0.4,0-0.8,0.2-1.1,0.4l0,0C3.1,6.7,2,9.2,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,9.2,20.9,6.7,19.1,4.9z'
                fill={color || background}
              />
            </g>
          </g>
        </svg>
      );
    case 'delete':
      return (
        <svg
          fill='none'
          stroke={color || background}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <polyline points='3 6 5 6 21 6' />
          <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' />
          <line x1='10' x2='10' y1='11' y2='17' />
          <line x1='14' x2='14' y1='11' y2='17' />
        </svg>
      );

    default:
      return null;
  }
};

export default Icon;
