import React from 'react';
import ewrr from '../assets/images/ewrr.png';
import CustomText from '../components/CustomText';

export default function About() {

  return (
    <div className='flex justify-center items-center relative container' id='about'>
      <div className='flex flex-col items-center space-y-7 flex-shrink-0 box'>
        <h3 className='absolute top-24 tracking-[15px] mx-auto text-primary z-10 font-grace text-4xl font-bold select-none'>
          About Me
        </h3>
        <img src={ewrr} alt='ewrr.png' className='relative w-64 h-64 opacity-70' />
        <div className='px-0 md:px-10'>
          <CustomText
            content='Welcome to my personal website!'
            className='font-bold text-2xl'
          />
          <CustomText isLink={true} />
          <CustomText
            content="I started my in-depth front-end programming journey in late 2021 and always
            kept upgrading my skills. I have experience with ReactJS and a little
            experience with Angular, VueJS. I'm also very friendly with TailwindCSS, Ant
            Design, Styled components, and Bootstrap."
            className='text-2xl mt-4 text-justify'
          />
          <CustomText
            content="A little bit about me: In my free time, I I'm really into watching Netflix,
            listening to music or reading mystery novels. My favorite novel authors are
            Higashino Keigo and Qin Ming. I am quite certain you've heard of Suspect X's
            Devotion or Forensic Qin Ming."
            className='text-2xl mt-4 text-justify'
          />
        </div>
      </div>
    </div>
  );
}
