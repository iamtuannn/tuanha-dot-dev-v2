import svgHTML from '../assets/skills/html.svg';
import svgCSS from '../assets/skills/css.svg';
import svgJS from '../assets/skills/javascript.svg';
import svgReact from '../assets/skills/react.svg';
import svgAngular from '../assets/skills/angular.svg';
import svgVue from '../assets/skills/vue.svg';
import svgAntDesign from '../assets/skills/antd.svg';
import svgTailwind from '../assets/skills/tailwind.svg';
import svgStyledComponents from '../assets/skills/styled-components.svg';
import svgNodeJS from '../assets/skills/nodejs.svg';
import svgVercel from '../assets/skills/vercel.svg';
import svgMongoDB from '../assets/skills/mongodb.svg';

import previewCinema01 from '../assets/projects/previewCinema01.jpg';
import previewCinema02 from '../assets/projects/previewCinema02.jpg';
import previewCinema03 from '../assets/projects/previewCinema03.jpg';
import previewCinema04 from '../assets/projects/previewCinema04.jpg';
import previewCinema05 from '../assets/projects/previewCinema05.jpg';
import previewCinema06 from '../assets/projects/previewCinema06.jpg';
import previewCinema07 from '../assets/projects/previewCinema07.jpg';

import previewQuotes01 from '../assets/projects/previewQuotes01.jpg';
import previewQuotes02 from '../assets/projects/previewQuotes02.jpg';

import preview01 from '../assets/projects/preview01.jpg';
import preview02 from '../assets/projects/preview02.jpg';
import preview03 from '../assets/projects/preview03.jpg';

export const skillList = [
  {
    name: 'HTML5',
    src: svgHTML,
  },
  {
    name: 'CSS3',
    src: svgCSS,
  },
  {
    name: 'Javascript',
    src: svgJS,
  },
  {
    name: 'React',
    src: svgReact,
  },
  {
    name: 'Angular',
    src: svgAngular,
  },
  {
    name: 'Vue.js',
    src: svgVue,
  },
  {
    name: 'Tailwind CSS',
    src: svgTailwind,
  },
  {
    name: 'Styled Components',
    src: svgStyledComponents,
  },
  {
    name: 'Ant Design',
    src: svgAntDesign,
  },
  {
    name: 'Node JS',
    src: svgNodeJS,
  },
  {
    name: 'Mongo DB',
    src: svgMongoDB,
  },
  {
    name: 'Vercel',
    src: svgVercel,
    color: {
      filter:
        'invert(99%) sepia(1%) saturate(1093%) hue-rotate(207deg) brightness(117%) contrast(90%)',
    },
  },
];

export const projects = [
  {
    name: 'Movie Booking',
    decs: 'Stay up to date with new movie news, watch the latest movie trailers, get trusted reviews of upcoming movies, and book movies.',
    tech: ['ReactJS', 'Ant Design', 'Styled Components'],
    demo: 'https://cinema.tuanha.dev/',
    preview: [
      previewCinema01,
      previewCinema02,
      previewCinema03,
      previewCinema04,
      previewCinema05,
      previewCinema06,
      previewCinema07,
    ],
  },
  {
    name: 'Random Quotes',
    decs: 'A randomly generated quote every 15 seconds.',
    tech: ['ReactJS', 'Ant Design', 'Styled Components'],
    demo: 'https://quotes.tuanha.dev/',
    preview: [previewQuotes01, previewQuotes02],
  },
  {
    name: 'My Portfolio Website',
    decs: 'Some information about me and projects was built by me.',
    tech: ['ReactJS', 'Tailwind CSS'],
    demo: '',
    preview: [preview01, preview02, preview03],
  },
];
