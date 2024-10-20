import profilePic from '../public/Profile.jpg'
import artemis from '../public/web-app/artemis.png'
import pbris from '../public/web-app/pbris.png'
import dentalfast from '../public/web-app/dentalfast.png'
import qrthis from '../public/web-app/qrthis.png'
import nxtform from '../public/web-app/nxtform.png'
import ched10 from '../public/web-app/ched10-website.png'
import nathan from '../public/web-app/nathanhr.png'
import linkiden from '../public/linkedin-48.png'

import {
  FaReact,
  FaVuejs,
  FaAngular,
  FaLaravel,
  FaNode,
  FaCss3,
  FaHtml5,
} from 'react-icons/fa'
import { RiNextjsFill } from 'react-icons/ri'
import {
  SiNuxtdotjs,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiTailwindcss,
  SiRedux,
  SiXstate,
  SiJest,
  SiMongoose,
  SiMongodb,
  SiExpress,
  SiEslint,
  SiPrettier,
  SiFirebase,
  SiGit,
  SiDocker,
  SiMysql,
} from 'react-icons/si'

import { UserType } from '../types/User.type'
import moment from 'moment'

const yearsExp = () => {
  const startDate = moment('2019-07-01', ' YYYY-MM-DD')
  const endDate = moment()

  return endDate.diff(startDate, 'years')
}

export const User: UserType = {
  id: 0,
  devName: 'Devghod',
  first_name: 'Ghodie Boy',
  middle_name: 'Tyson',
  last_name: 'Madrona',
  email: 'gbtm.workspace@gmail.com',
  profession: 'Full Stack Developer',
  primary_profession: 'Frontend Developer',
  secondary_profession: 'Web Developer',
  education: {
    college: 'University of Science and Technology of Southern Philippines',
    year: '2019',
    degree: 'Undergraduate',
    course: 'Bachelor of Science in Information Technology',
    short: 'BSIT',
  },
  address: {
    country: 'Philippines',
    province: 'Misamis Oriental',
    city: 'Cagayan de Oro City',
    barangay: 'Bugo',
    subdivision: 'Villa Trinitas Subdivision',
    street: 'Phase 3A, Block 3, Lot 13',
    postalCode: '9000',
  },
  links: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ghodie-madrona',
      image: linkiden,
    },
  ],
  profile: profilePic,
  skills: [],
  techStack: [
    { name: 'React', logo: FaReact },
    { name: 'Next', logo: RiNextjsFill },
    { name: 'Nuxt', logo: SiNuxtdotjs },
    { name: 'Vue', logo: FaVuejs },
    { name: 'Angular', logo: FaAngular },
    { name: 'Typescript', logo: SiTypescript },
    { name: 'Javascript', logo: SiJavascript },
    { name: 'Php', logo: SiPhp },
    { name: 'Laravel', logo: FaLaravel },
    { name: 'Laravel', logo: FaNode },
    { name: 'CSS', logo: FaCss3 },
    { name: 'HTML', logo: FaHtml5 },
    { name: 'Tailwind', logo: SiTailwindcss },
    { name: 'Vuex', logo: undefined },
    { name: 'Redux', logo: SiRedux },
    { name: 'Xstate', logo: SiXstate },
    { name: 'Zustand', logo: undefined },
    { name: 'Pinia', logo: undefined },
    { name: 'Jest', logo: SiJest },
    { name: 'Mongoose', logo: SiMongoose },
    { name: 'Express', logo: SiExpress },
    { name: 'Eslint', logo: SiEslint },
    { name: 'Prettier', logo: SiPrettier },
    { name: 'Firebase', logo: SiFirebase },
    { name: 'Mongodb', logo: SiMongodb },
    { name: 'Git', logo: SiFirebase },
    { name: 'Docker', logo: SiMongodb },
    { name: 'Mysql', logo: SiMysql },
  ],
  experience: [
    {
      company: 'Nathan Digital',
      short: '',
      position: 'Front End Developer',
      shortPosition: '',
      dateStarted: '01-11-23',
      dateEnded: '09-26-24',
      description: `Designed and implemented intuitive UI/UX to create engaging user experiences and responsive web components.
        Developed and integrated new features to enhance application functionality and improve user satisfaction.
        Optimized code for performance and efficiency, ensuring a smooth and responsive application experience.
        Refactored existing code to improve readability and maintainability, contributing to a more streamlined development process.
      `,
      type: 'Full-time',
    },
    {
      company: 'Commission on Higher Education Regional Office 10',
      short: 'CHED RO 10',
      position: 'Project Technical Staff 3 - Programmer',
      shortPosition: 'PTS 3',
      dateStarted: '03-11-21',
      dateEnded: '12-31-21',
      description: `Managed the company network and provided assistance for various technical concerns to ensure operational efficiency.
        Served as a WordPress implementor and maintainer for website management.
        Developed small-scale applications using AppScript to enhance service delivery.
      `,
      type: 'Contract',
    },
    {
      company: 'Fligno Softwware Philippines Inc.',
      short: '',
      position: 'Associate Software Engineer',
      shortPosition: '',
      dateStarted: '09-11-20',
      dateEnded: '03-11-21',
      description: `Create a highly responsive web application utilizing modern tools, such as the React library and Vue framework for the front end, and the PHP Laravel framework for the back end. For the front end, we implement state management to promote a more predictable data flow and improve collaboration among team members. For the back end, we embrace Test-Driven Development (TDD) to improve code quality and allow for early bug detection.
      `,
      type: 'Full-time',
    },
    {
      company: 'Anti-Red Tape Authority',
      short: 'ARTA',
      position: 'Project Development Officer 1 - IT Specialist',
      shortPosition: 'PDO 1',
      dateStarted: '10-01-20',
      dateEnded: '12-31-20',
      description: `Developed and maintained web applications, including PBRIS and ARTEMIS, utilizing Firebase and AngularJS to enhance functionality and user experience.
      `,
      type: 'Part-time',
    },
    {
      company: 'Redlemon Digital Media',
      short: '',
      position: 'Junior System and Network Administrator',
      shortPosition: '',
      dateStarted: '07-01-19',
      dateEnded: '05-31-20',
      description: `Managed network connections and performed troubleshooting to resolve connectivity issues.
Installed new software and provided assistance for various technical-related concerns to ensure smooth operation.
      `,
      type: 'Full-time',
    },
  ],
  projects: [
    {
      name: 'Nathanhr ERP',
      url: 'https://erp.nathanhr.com/',
      image: nathan,
      tools: ['Nuxt', 'Express', 'Mongodb', 'Node', 'Vuex'],
    },
    {
      name: 'Nxtform',
      url: 'https://nxtform.com',
      image: nxtform,
      tools: ['Nuxt', 'Laravel', 'Vuex'],
    },
    {
      name: 'DentalFast',
      url: 'https://dentalfast.com.au',
      image: dentalfast,
      tools: ['React', 'Laravel', 'Xstate,'],
    },
    {
      name: 'QRThis',
      url: 'https://qrthis.io',
      image: qrthis,
      tools: ['React', 'Laravel', 'Redux,'],
    },
    {
      name: 'ARTEMIS',
      url: 'https://regulations.gov.ph/artemis/contact-us',
      image: artemis,
      tools: ['Angular', 'Firebase', 'Typescript'],
    },
    {
      name: 'PBRIS',
      url: 'https://regulations.gov.ph/pbris/login?initial=true',
      image: pbris,
      tools: ['Angular', 'Firebase', 'Typescript'],
    },
    {
      name: 'CHED 10 Website',
      url: 'https://ro10.ched.gov.ph',
      image: ched10,
      tools: ['Wordpress'],
    },
  ],
  feeds: [
    {
      name: 'About Me',
      professions: [
        'Front End Developer',
        'Associate Software Engineer',
        'Full Stack Developer',
      ],
      url: '',
      image: profilePic,
      type: 'info',
      details: `Hi, I\'m Ghodie Boy Madrona, an IT graduate from the Philippines, currently working as a web developer with ${yearsExp()} years of experience. My passion for programming started because I enjoy working remotely, solving logical challenges, and designing responsive, interactive user interfaces. I love exploring new technologies, which helps me continuously grow and improve my skills. This curiosity gives me an edge in building high-quality, efficient web applications.`,
      tools: [],
    },
    {
      name: 'Nathanhr ERP',
      url: 'https://erp.nathanhr.com/',
      image: nathan,
      type: 'project',
      details:
        'A responsive web app designed for managing employment and HR-related processes, including leave management, employee onboarding and offboarding, and payroll processing. The app streamlines key HR functions by providing a user-friendly interface that works seamlessly across both desktop and mobile devices.',
      tools: [
        'Nuxt',
        'Vue',
        'Express',
        'Mongoose',
        'Node',
        'Vuex',
        'Web Application',
      ],
    },
    {
      name: 'Nxtform',
      url: 'https://nxtform.com',
      image: nxtform,
      type: 'project',
      details:
        'A responsive web app that manages tenant applications, tracks application progress, displays a list of available properties, and offers simple automation features with strong security.',
      tools: ['Nuxt', 'Laravel', 'Vuex', 'Web Application'],
    },
    {
      name: 'DentalFast',
      url: 'https://dentalfast.com.au',
      image: dentalfast,
      type: 'project',
      details:
        'A responsive web app for delivering dental equipment that works seamlessly on both web and mobile devices.',
      tools: ['React', 'Laravel', 'Xstate', 'Web Application'],
    },
    {
      name: 'QRThis',
      url: 'https://qrthis.io',
      image: qrthis,
      type: 'project',
      details:
        'A web app for creating and customizing QR codes allows users to generate, modify, and download QR codes that encode different types of information. This app would give users the ability to design QR codes that reflect their personal or business needs, ensuring that their QR codes stand out visually or functionally. ',
      tools: ['React', 'Laravel', 'Redux', 'Web Application'],
    },
    {
      name: 'Anti-Red Tape E-Management Information System (ARTEMIS)',
      url: 'https://regulations.gov.ph/artemis/contact-us',
      image: artemis,
      type: 'project',
      details:
        "A web app designed to manage and verify regulations related to the Citizen's Charter, ensuring compliance and transparency in public service delivery. The app helps government agencies and organizations streamline the process of tracking, managing, and validating regulations that govern the rights and services promised to citizens under the charter.",
      tools: ['Angular', 'Firebase', 'Typescript', 'Web Application'],
    },
    {
      name: 'Philippine Business Regulations Information System (PBRIS)',
      url: 'https://regulations.gov.ph/pbris/login?initial=true',
      image: pbris,
      type: 'project',
      details:
        'A web app designed to display verified regulations to the public, ensuring transparency and easy access to important laws, guidelines, and policies. This app allows government agencies or regulatory bodies to showcase up-to-date, authenticated regulations in a user-friendly manner.',
      tools: ['Angular', 'Firebase', 'Typescript', 'Web Application'],
    },
    {
      name: 'Commission on Higher Education Regional Office 10 (CHED RO 10)',
      url: 'https://ro10.ched.gov.ph',
      image: ched10,
      type: 'project',
      details:
        'This is the official website for Commission on Higher Education Regional Office 10 (CHED RO 10).',
      tools: ['Wordpress', 'Website'],
    },
  ],
}
