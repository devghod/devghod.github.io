import profilePic from '../public/Profile.jpg'
import artemis from '../public/web-app/artemis.png'
import pbris from '../public/web-app/pbris.png'
import dentalfast from '../public/web-app/dentalfast.png'
import qrthis from '../public/web-app/qrthis.png'
import nxtform from '../public/web-app/nxtform.png'
import ched10 from '../public/web-app/ched10-website.png'
import nathan from '../public/web-app/nathanhr.png'
import linkiden from '../public/linkedin-48.png'

import { UserType } from '../types/User.type'

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
      details:
        'I’m a full stack developer with over 4 years of experience building efficient and scalable applications, with a strong focus on frontend development. I’m passionate about optimizing performance and ensuring smooth user experiences, and I frequently use unit testing to maintain code quality and reliability. In my free time, I explore new tech tools to enhance my skills and improve the scalability of the systems I build. Being a developer can be challenging, so I take breaks by walking, snacking, or playing video games to recharge.',
      tools: [],
    },
    {
      name: 'Nathanhr ERP',
      url: 'https://erp.nathanhr.com/',
      image: nathan,
      type: 'project',
      details: '',
      tools: ['Nuxt', 'Vue', 'Express', 'Mongodb', 'Node', 'Vuex'],
    },
    {
      name: 'Nxtform',
      url: 'https://nxtform.com',
      image: nxtform,
      type: 'project',
      details: '',
      tools: ['Nuxt', 'Laravel', 'Vuex'],
    },
    {
      name: 'DentalFast',
      url: 'https://dentalfast.com.au',
      image: dentalfast,
      type: 'project',
      details: '',
      tools: ['React', 'Laravel', 'Xstate'],
    },
    {
      name: 'QRThis',
      url: 'https://qrthis.io',
      image: qrthis,
      type: 'project',
      details: '',
      tools: ['React', 'Laravel', 'Redux'],
    },
    {
      name: 'ARTEMIS',
      url: 'https://regulations.gov.ph/artemis/contact-us',
      image: artemis,
      type: 'project',
      details: '',
      tools: ['Angular', 'Firebase', 'Typescript'],
    },
    {
      name: 'PBRIS',
      url: 'https://regulations.gov.ph/pbris/login?initial=true',
      image: pbris,
      type: 'project',
      details: '',
      tools: ['Angular', 'Firebase', 'Typescript'],
    },
    {
      name: 'CHED 10 Website',
      url: 'https://ro10.ched.gov.ph',
      image: ched10,
      type: 'project',
      details: '',
      tools: ['Wordpress'],
    },
  ],
}
