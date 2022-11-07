import React from 'react';
import {useWasViewed} from '../hooks/useWasViewed';

export default function CustomText({content = '', className = '', isLink = false}) {
  const {setRef, wasViewed} = useWasViewed();
  const animation = wasViewed ? 'animate-base' : 'null';

  if (isLink) {
    return (
      <p className={`text-2xl mt-4 text-justify ${animation}`} ref={setRef}>
        I have completed the Professional Front-end Developer training program at{' '}
        <a
          href='https://cybersoft.edu.vn/'
          className='font-bold text-primary'
          target='_blank'
          rel='noreferrer'>
          Cybersoft Academy
        </a>{' '}
        with an excellent degree.
      </p>
    );
  }

  return (
    <p ref={setRef} className={`${className} ${animation}`}>
      {content}
    </p>
  );
}
