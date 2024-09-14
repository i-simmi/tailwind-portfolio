
import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
 import { SiMongodb } from "react-icons/si";
 import questionImg from './assets/question.png';
 import unsplashImg from './assets/unsplash.png';  
 import tourImg from './assets/tour.png'; 
export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <SiMongodb className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in MongoDB, designing and managing flexible, high-performance databases with a focus on document-based data modeling and efficient query optimization.',
  },
  {
    id: nanoid(),
    title: 'NodeJS',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in Node.js, building scalable and high-performance server-side applications with a strong emphasis on event-driven, non-blocking I/O architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: questionImg,
    url: 'https://stunning-nougat-07998f.netlify.app/',
    github: 'https://github.com/i-simmi',
    title: 'Questions app',
    text: 'In my React Questions app, I implemented a toggle button feature that allows users to expand or collapse the answers for each question dynamically. The application efficiently manages state using React hooks like `useState`, ensuring a smooth and responsive user experience. The component-based architecture keeps the code modular, making it easy to extend functionality in the future.',
  },
  {
    id: nanoid(),
    img: tourImg,
    url: 'https://effulgent-lebkuchen-ed8ad2.netlify.app/',
    github: 'https://github.com/i-simmi',
    title: 'tour app',
    text: "In my React Tour app, I used state hooks to manage the visibility and interaction of tour details and user reviews. The app allows users to toggle through different tours and see reviews dynamically. This approach ensures a seamless user experience, efficiently handling updates and rendering with React's state management.",
  },
  {
    id: nanoid(),
    img: unsplashImg,
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/i-simmi',
    title: 'unsplash app',
    text: "The project is developed entirely using React.js, leveraging its component-based architecture to build a dynamic and efficient interface.The UI is optimized for seamless user interaction, focusing on smooth rendering and efficient data loading with React's virtual DOM",
  },
];
