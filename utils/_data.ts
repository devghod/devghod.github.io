import profilePic from '../public/web-app/code_ninja.jpg'
import artemis from '../public/web-app/artemis.png'
import pbris from '../public/web-app/pbris.png'
import dentalfast from '../public/web-app/dentalfast.png'
import qrthis from '../public/web-app/qrthis.png'
import nxtform from '../public/web-app/nxtform.png'
import ched10 from '../public/web-app/ched10-website.png'
import nathan from '../public/web-app/nathanhr.png'
import linkiden from '../public/linkedin-48.png'

import { UserType } from '../types/User.type';

export const User: UserType = {
  id: 0,
  devName: "devghod",
  first_name: "Ghodie Boy",
  middle_name: "Tyson",
  last_name: "Madrona",
  email: "gbtm.workspace@gmail.com",
  profession: "Full Stack Developer",
  address: {
    country: "Philippines",
    province: "Misamis Oriental",
    city: "Cagayan de Oro City",
    barangay: "Bugo",
    subdivision: "Villa Trinitas Subdivision",
    street: "Phase 3A, Block 3, Lot 13",
    postalCode: "9000",
  },
  links: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/ghodie-madrona",
      image: linkiden,
    },
  ],
  profile: profilePic,
  skills: [],
  techStack: [
    'MEVN',
    'MERN',
    'React',
    'Next',
    'Vue',
    'Nuxt',
    'Typescript',
    'Javascript',
    'Angular',
    'Node',
    'Laravel',
    'CSS',
    'Tailwind',
  ],
  projects: [
    {
      name: "Nathanhr ERP",
      url: "https://erp.nathanhr.com/",
      image: nathan,
      tools: [
        "Nuxt",
        "Express",
        "Mongodb",
        "Node",
        "Vuex",
      ],
    },
    {
      name: "Nxtform",
      url: "https://nxtform.com",
      image: nxtform,
      tools: [
        "Nuxt",
        "Laravel",
        "Vuex",
      ],
    },
    {
      name: "DentalFast",
      url: "https://dentalfast.com.au",
      image: dentalfast,
      tools: [
        "React",
        "Laravel",
        "Xstate,"
      ],
    },
    {
      name: "QRThis",
      url: "https://qrthis.io",
      image: qrthis,
      tools: [
        "React",
        "Laravel",
        "Redux,"
      ],
    },
    {
      name: "ARTEMIS",
      url: "https://regulations.gov.ph/artemis/contact-us",
      image: artemis,
      tools: [
        "Angular",
        "Firebase",
        "Typescript",
      ],
    },
    {
      name: "PBRIS",
      url: "https://regulations.gov.ph/pbris/login?initial=true",
      image: pbris,
      tools: [
        "Angular",
        "Firebase",
        "Typescript",
      ],
    },
    {
      name: "CHED 10 Website",
      url: "https://ro10.ched.gov.ph",
      image: ched10,
      tools: [
        "Wordpress",
      ],
    },
  ],
  feeds: [
    {
      name: "About Me",
      professions: [
        'Front End Developer',
        'Associate Software Engineer',
        'Programmer'
      ],
      url: "",
      image: profilePic,
      type: "info",
      details: "I’m a full stack developer with over 4 years of experience building efficient and scalable applications, with a strong focus on frontend development. I’m passionate about optimizing performance and ensuring smooth user experiences, and I frequently use unit testing to maintain code quality and reliability. In my free time, I explore new tech tools to enhance my skills and improve the scalability of the systems I build. Being a developer can be challenging, so I take breaks by walking, snacking, or playing video games to recharge.",
      tools: [],
    },
    {
      name: "Nathanhr ERP",
      url: "https://erp.nathanhr.com/",
      image: nathan,
      type: 'project',
      details: '',
      tools: [
        "Nuxt",
        "Express",
        "Mongodb",
        "Node",
        "Vuex",
      ],
    },
    {
      name: "Nxtform",
      url: "https://nxtform.com",
      image: nxtform,
      type: 'project',
      details: '',
      tools: [
        "Nuxt",
        "Laravel",
        "Vuex",
      ],
    },
    {
      name: "DentalFast",
      url: "https://dentalfast.com.au",
      image: dentalfast,
      type: 'project',
      details: '',
      tools: [
        "React",
        "Laravel",
        "Xstate"
      ],
    },
    {
      name: "QRThis",
      url: "https://qrthis.io",
      image: qrthis,
      type: 'project',
      details: '',
      tools: [
        "React",
        "Laravel",
        "Redux"
      ],
    },
    {
      name: "ARTEMIS",
      url: "https://regulations.gov.ph/artemis/contact-us",
      image: artemis,
      type: 'project',
      details: '',
      tools: [
        "Angular",
        "Firebase",
        "Typescript",
      ],
    },
    {
      name: "PBRIS",
      url: "https://regulations.gov.ph/pbris/login?initial=true",
      image: pbris,
      type: 'project',
      details: '',
      tools: [
        "Angular",
        "Firebase",
        "Typescript",
      ],
    },
    {
      name: "CHED 10 Website",
      url: "https://ro10.ched.gov.ph",
      image: ched10,
      type: 'project',
      details: '',
      tools: [
        "Wordpress",
      ],
    },
  ],
};