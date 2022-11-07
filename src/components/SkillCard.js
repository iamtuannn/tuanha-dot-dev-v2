import React from 'react';
import {useWasViewed} from '../hooks/useWasViewed';

export default function SkillCard({skill}) {
  const {name, src, color} = skill;
  const {setRef, wasViewed} = useWasViewed();
  const animation = wasViewed ? 'animate-jelly' : 'null';

  return (
    <div
      className={`group p-4 flex-center cursor-pointer duration-500 ease-out relative ${animation}`}
      ref={setRef}>
      <div className="bg-white text-primary px-2 py-1 rounded-md shadow-tooltip opacity-0 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)] absolute top-0 left-1/2 -translate-x-1/2 w-max group-hover:-top-8 group-hover:opacity-100 before:absolute before:content-[''] before:h-2 before:w-2 before:bg-inherit before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:rotate-45 text-xl font-khand z-10">
        {name}
      </div>
      <img
        src={src}
        alt={name}
        className='h-20 md:h-24 duration-500 ease-in-out group-hover:scale-125 mx-auto'
        style={color ? color : null}
      />
    </div>
  );
}
