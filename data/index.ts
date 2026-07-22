export const navItems = [
  {name: 'Home', link: '/'},
  {name: 'About', link: '#about'},
  {name: 'Projects', link: '#projects'},
  {name: 'Testimonials', link: '#testimonials'},
  {name: 'Contact', link: '#contact'},
];

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },
  {
    id: 5,
    title: 'Building Innovative Projects in Real-Time.',
    description: 'Twitch Live-Coding',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    title: 'Show Time',
    description:
      'A responsive full-stack platform for musicians to manage gigs, calendar and revenue. Frontend built with React 19, TypeScript, Vite, Tailwind CSS, Zustand and React Hook Form + Zod; backend built with Node/Hono, Prisma, PostgreSQL and JWT + Google OAuth authentication.',
    img: '/project-1.png',
    link: 'https://music-show-eight.vercel.app/',
  },
  {
    title: 'GitHub Explorer',
    description:
      'A responsive app to search GitHub users and browse their repositories. Built with React 19, TypeScript, Vite, React Router v7, Redux Toolkit (RTK Query for data fetching and slices for global state), Axios with error-handling interceptors, Bootstrap 5 and Jest + Testing Library.',
    img: '/project-4.png',
    link: 'https://gh-repository-explorer.vercel.app/',
  },
  {
    title: 'Crypto Dashboard',
    description:
      'A responsive dashboard for tracking real-time cryptocurrency prices, market analytics and trends. Built with Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, TanStack Query and Zustand; charts with Recharts, forms with React Hook Form + Zod, live data from the CoinGecko API with server-side caching.',
    img: '/project-2.png',
    link: 'https://dashcrypto.vercel.app/',
  },
  {
    title: 'Portfolio',
    description:
      'A responsive single-page portfolio presenting my work, experience and tech stack. Built with Next.js 14 (App Router), React 18, TypeScript and Tailwind CSS; animated UI with Framer Motion, a 3D globe and canvas shader effects with Three.js via React Three Fiber, Lottie micro-interactions and deployed on Vercel.',
    img: '/project-3.png',
    link: 'https://saulo-veiga.vercel.app/',
  },
];

export const testimonials = [
  {
    quote:
      'Saulo is a skilled and committed engineer. I had the opportunity to work directly with Saulo on several projects and was always impressed with his contributions. He is glue to any team and always resilient and poised when pressure is high. I highly recommend Saulo and am happy to speak directly to his work.',
    name: 'Eric Kramlinger',
    title: 'Founder @ LMP',
    picture: '/eric.png',
  },
  {
    quote:
      'Saulo is an excellent professional, always delivering concise and well-executed work. He is dedicated to his craft and consistently seeks to improve and provide the best possible solutions. Highly recommend!',
    name: 'Talita Lima',
    title: 'Senior Quality Assurance Engineer',
    picture: '/talita.png',
  },
  {
    quote:
      'Saulo is a dedicated developer and great person to work with. His knowledge can help a lot on a development team.',
    name: 'Yauari Vieira',
    title: 'Senior Frontend Engineer',
    picture: '/yauari.png',
  },
  {
    quote:
      'Saulo is a highly skilled developer. I had the pleasure of working with him for over a year and witnessed a remarkable improvement in his abilities. He consistently delivers quality work and is always open to feedback and eager to learn new things. I assisted him with some questions and new learning opportunities, and he always responded with outstanding results. Saulo is an excellent professional, both technically and personally. He is communicative and easy-going, making it a pleasure to work with him. It was a wonderful experience to witness his growth.',
    name: 'Adriano Maringolo',
    title: 'Senior Frontend Engineer',
    picture: '/adriano.png',
  },
];

export const workExperience = [
  {
    title: 'Software Engineering AI Trainer',
    company: 'Anyone AI · USA',
    period: 'Jun 2026 – Present',
    desc: 'Design and peer-review multi-file coding tasks covering bug fixing, feature work, refactoring and test generation, writing specifications and reference implementations used to train and evaluate coding agents.',
    thumbnail: '/exp1.svg',
  },
  {
    title: 'AI Frontend Engineer',
    company: 'Taste Labs · USA',
    period: 'Jun 2026 – Present',
    desc: 'Reproduce production-grade websites with pixel-perfect accuracy in React, TypeScript and Tailwind CSS, guiding AI-assisted workflows to deliver benchmark examples for UI generation tasks.',
    thumbnail: '/exp2.svg',
  },
  {
    title: 'Founder & AI Software Engineer',
    company: 'ShowTime · Brazil',
    period: 'Oct 2025 – Present',
    desc: 'Architected an AI-powered SaaS for musicians covering scheduling, contracts, finances and analytics, with an LLM assistant, autonomous agents and RAG on a Next.js, Hono and PostgreSQL stack.',
    thumbnail: '/exp3.svg',
  },
  {
    title: 'Senior Full-Stack Engineer',
    company: 'Stefanini · LATAM',
    period: 'Aug 2025 – Apr 2026',
    desc: 'Delivered features for a large-scale Brazilian e-commerce platform and a real-time chat support system, cutting page load times by 15–30% and development time by ~30% through reusable design systems.',
    thumbnail: '/exp4.svg',
  },
  {
    title: 'Frontend Engineer',
    company: 'Febracis · Brazil',
    period: 'Feb 2025 – Aug 2025',
    desc: 'Led frontend development of an event platform serving ~30,000 users, driving architecture decisions and working closely with QA to catch critical bugs early and improve release stability.',
    thumbnail: '/exp1.svg',
  },
  {
    title: 'Frontend Engineer',
    company: 'EyeTesters · Canada',
    period: '',
    desc: 'Built responsive, accessible interfaces for an online vision testing platform, improving load times through efficient rendering strategies and optimized asset delivery.',
    thumbnail: '/exp2.svg',
  },
  {
    title: 'Principal Frontend Engineer',
    company: 'Muse · USA',
    period: '',
    desc: 'Defined frontend architecture and best practices for a fast-paced startup, leading responsive, user-centric platforms and reusable components that improved development efficiency.',
    thumbnail: '/exp3.svg',
  },
  {
    title: 'Software Engineer',
    company: 'Traive · Brazil',
    period: 'Apr 2022 – Jul 2024',
    desc: 'Built interfaces for an agritech fintech supporting +R$6B in structured credit operations, reducing production bugs by 25–40% and dashboard load times by 20–40%, and mentoring interns and juniors.',
    thumbnail: '/exp4.svg',
  },
];

export const socialMedia = [
  {
    img: '/linkedin.svg',
    link: 'https://www.linkedin.com/in/saulo-saraiva/',
  },
  {
    img: '/github.svg',
    link: 'https://github.com/sauloveigr',
  },
];
