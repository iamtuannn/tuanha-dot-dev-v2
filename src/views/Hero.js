import React from 'react';
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import ScrollUp from '../components/ScrollUp';
import {useWasViewed} from '../hooks/useWasViewed';

export default function Hero() {
  const onScroll = (id) =>
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});

  const downloadResume = () => {
    const a = document.createElement('a');
    a.href = '/HoangAnhTuan-FrontEndDev-221102.pdf';
    a.click();
  };

  const [text] = useTypewriter({
    words: ["Hi ! My name's Anh Tuan", "I'm a fresher Front-end Developer"],
    loop: true,
    delaySpeed: 2000,
  });

  const {setRef, isInView} = useWasViewed();

  return (
    <div
      className='h-screen flex flex-col space-y-8 items-center justify-center text-center w-full overflow-hidden container'
      id='hero'>
      <div
        className='relative flex justify-center items-center'
        style={{opacity: 1, borderRadius: '20%', transform: 'none'}}
        ref={setRef}>
        <div className='rounded-full border border-[#333333] h-[200px] w-[200px] absolute mt-52 animate-ping' />
        <div className='rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-52' />
        <div className='rounded-full border border-[#333333] h-[500px] w-[500px] absolute mt-52' />
        <div className='rounded-full border border-primary opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse' />
        <div className='rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52' />
      </div>

      <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover select-none'
        src='https://www.anhtuan.info/static/media/tuanha.7cef3617ab3357465df3.jpg'
        alt='Hoang A. Tuan'
      />
      <div className='z-20 relative'>
        <h2 className='tracking-[15px] text-sm uppercase text-gray-500 pb-2 select-none'>
          FrontEnd Developer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10 select-none'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#38bdf8' />
        </h1>
        <div className='pt-5'>
          <button className='btn btn-hero' onClick={() => onScroll('about')}>
            About
          </button>
          <button className='btn btn-hero' onClick={() => onScroll('skills')}>
            Skills
          </button>
          <button className='btn btn-hero' onClick={() => onScroll('features')}>
            Features
          </button>
          <button className='btn btn-hero' onClick={downloadResume}>
            Download Resume
          </button>
        </div>
      </div>

      <ScrollUp visible={!isInView} />
    </div>
  );
}
