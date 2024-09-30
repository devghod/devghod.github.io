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
      stacks: [
        "NuxtJS",
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
      stacks: [
        "NuxtJS",
        "Laravel",
        "Vuex",
      ],
    },
    {
      name: "DentalFast",
      url: "https://dentalfast.com.au",
      image: dentalfast,
      stacks: [
        "ReactJS",
        "Laravel",
        "Xstate,"
      ],
    },
    {
      name: "QRThis",
      url: "https://qrthis.io",
      image: qrthis,
      stacks: [
        "ReactJS",
        "Laravel",
        "Redux,"
      ],
    },
    {
      name: "ARTEMIS",
      url: "https://regulations.gov.ph/artemis/contact-us",
      image: artemis,
      stacks: [
        "Angular",
        "Firebase",
        "Typescript",
      ],
    },
    {
      name: "PBRIS",
      url: "https://regulations.gov.ph/pbris/login?initial=true",
      image: pbris,
      stacks: [
        "Angular",
        "Firebase",
        "Typescript",
      ],
    },
    {
      name: "CHED 10 Website",
      url: "https://ro10.ched.gov.ph",
      image: ched10,
      stacks: [
        "Wordpress",
      ],
    },
  ],
};