import React from 'react';
import {FaChevronUp} from 'react-icons/fa';

export default function ScrollUp({visible}) {
  return (
    <div
      className=' fixed text-center right-4 bottom-8 overflow-hidden flex-col cursor-pointer animate-bounce duration-700 ease-in-out z-30'
      style={
        visible
          ? {visibility: 'visible', opacity: '1'}
          : {visibility: 'hidden', opacity: '0'}
      }>
      <FaChevronUp
        className=' p-2 bg-[#ca4242] text-4xl rounded-lg'
        onClick={() =>
          document.getElementById('hero').scrollIntoView({behavior: 'smooth'})
        }
      />
    </div>
  );
}
