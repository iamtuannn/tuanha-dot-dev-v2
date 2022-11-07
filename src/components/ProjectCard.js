import React from 'react';
import ProjectPreview from './ProjectPreview';
import {FaEye} from 'react-icons/fa';
import {BsBoxArrowInDownRight, BsBoxArrowRight} from 'react-icons/bs';
import {useWasViewed} from '../hooks/useWasViewed';

export default function ProjectCard({project}) {
  const {name, decs, tech, demo, preview} = project;
  const {setRef, wasViewed} = useWasViewed();
  const animation = wasViewed ? 'odd:animate-fade-in-left even:animate-fade-in-right' : 'null';

  const viewDemo = () => {
    const a = document.createElement('a');
    a.href = demo;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.click();
  };

  const scrollTop = () =>
    document.getElementById('hero').scrollIntoView({behavior: 'smooth'});

  return (
    <div
      className={`md:grid md:grid-cols-2 sm:flex sm:flex-col bg-cover gap-10 p-7 xs:p-10 rounded-2xl ${animation}`}
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(255, 91, 137, 0.25) 53.5%, rgba(234, 68, 68, .25) 100.2%)',
      }}
      ref={setRef}>
      <div className=' w-full rounded-lg overflow-hidden bg-[#2f3744] relative group'>
        <ProjectPreview
          images={preview}
          className='group-hover:opacity-40 sm:h-[20rem] md:h-[18rem] lg:h-[22rem] w-full h-full'
        />
        <div className=' flex items-center justify-center absolute top-0 right-0 w-full h-full invisible group-hover:visible cursor-pointer'>
          <FaEye
            className=' w-12 h-12 text-primary'
            onClick={demo === '' ? scrollTop : viewDemo}
          />
        </div>
      </div>
      <div className='flex flex-col justify-between'>
        <div className='flex flex-col mt-5 sm:mt-0'>
          <p className='main-project-title font-semibold text-4xl pb-5'>{name}</p>
          <p className='leading-8 pb-2 text-2xl'>{decs}</p>
        </div>
        <div className='flex flex-col'>
          {tech.map((t, idx) => (
            <div className='flex items-center gap-2' key={idx}>
              <BsBoxArrowInDownRight className=' translate-y-[-2px]' />{' '}
              <p className='text-xl leading-7'>{t}</p>
            </div>
          ))}
        </div>
        <div className='flex justify-center pt-4'>
          <button
            className='btn btn-external-link py-2 px-3'
            onClick={demo === '' ? scrollTop : viewDemo}>
            <span className='content inline-flex relative text-xl'>
              Visit Website
              <div className='relative'>
                <BsBoxArrowRight className='icon absolute ' />
              </div>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
