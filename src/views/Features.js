import React from 'react';
import ProjectCard from '../components/ProjectCard';
import {projects} from '../utils/constants';

export default function Features() {
  return (
    <div
      className=' relative bg-[#172029] pt-[100px] pb-[75px] min-h-screen z-10'
      id='features'>
      <div className='container'>
        <div className='lines'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
        <h3 className='tracking-[15px] text-center text-primary z-10 font-grace text-6xl md:text-8xl font-bold select-none mt-[-70px]'>
          Features
        </h3>
        <div className='box grid grid-cols-1 gap-4 md:gap-12'>
          {projects.map((project, idx) => (
            <ProjectCard project={project} key={idx} />
          ))}
        </div>
        <div className=' flex-center mx-auto py-4 mb-[-75px]'>
          <p className=' text-center text-2xl'>
            Built and designed by{' '}
            <a
              className=' text-primary'
              href='https://www.facebook.com/tuan.hngf/'
              target='_blank'
              rel='noopener noreferrer'>
              Hoang A. Tuan
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
