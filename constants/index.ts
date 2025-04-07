export type Project = {
    id: number,
    name: string,
    desc: string,
    tags: string[],
    github: string,
    demo: string | null,
    img: string
}

export const navLinks = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Skills',
        path: '/skills',
    },
    {
        name: 'Projects',
        path: '/projects',
    },
    {
        name: 'Contact',
        path: '/contact',
    },
];

export const projects: Project[] = [
    {
        id: 700,
        name: 'CodeStash',
        desc: 'This utility tool is designed specifically for developers to store code snippets for quick access.',
        tags: ['NextJs', 'Typescript', 'MongoDB Vector Store', 'Redis', 'Docker', 'Firebase'],
        github: 'https://github.com/awesohame/CodeStash-v2',
        demo: 'https://codestash-demo.vercel.app/',
        img: '/assets/projectimages/codestash.png'
    },

    {
        id: 600,
        name: 'GateKeeper Auth',
        desc: 'This npm package provides components, hooks and functions for developers to manage authentication in a react app.',
        tags: ['Typescript', 'PostgreSQL', 'NeonDB', 'React'],
        github: 'https://github.com/orgs/Gatekeeper-Auth-Manager/repositories',
        demo: 'https://www.npmjs.com/package/@gatekeeper-auth/react',
        img: '/assets/projectimages/gatekeeper.png'
    },
    {
        id: 500,
        name: 'Vista',
        desc: 'A Full Stack Video Conferencing webapp',
        tags: ['Nextjs', 'Typescript'],
        github: 'https://github.com/awesohame/Vista',
        demo: 'https://vista-zoom-clone.vercel.app/',
        img: '/assets/projectimages/vista.png'
    },
    {
        id: 400,
        name: 'Clean N Green',
        desc: 'An E-commerce webapp with the goal of promoting eco-friendly products. This project was made at the hackathon DUHacks 3.0 and secured a top 15 position out of 156 participating teams from the entire nation.',
        tags: ['React', 'Nodejs', 'Express', 'MongoDB'],
        github: 'https://github.com/awesohame/33_git-push--f_DUhacks',
        demo: 'https://devfolio.co/projects/clean-n-green-0445',
        img: '/assets/projectimages/cleanngreen.png'
    },
    // {
    //     id: 300,
    //     name: "Discord JS Music bot",
    //     desc: "A Discord bot with music and basic moderation commands.",
    //     github: "https://github.com/awesohame/SancBotDJS",
    //     demo: null,
    //     tags: ["DiscordJS", "ExpressJS", "ytdl-core"],
    //     img: '/assets/projects/sancbot.png',
    // },
    {
        id: 200,
        name: "StudySprint",
        desc: "An examination portal website for multiple choice question type exams.",
        img: '/assets/projectimages/studysprint.png',
        github: "https://github.com/awesohame/ExamPortal-Website",
        demo: null,
        tags: ["HTML", "CSS", "Javascript", "ExpressJS", "MySQL", "EJS"],
    },
    {
        id: 100,
        name: "Portfolio Site",
        desc: "A portfolio website to showcase my projects and skills.",
        img: '/assets/projectimages/portfolio.png',
        github: "https://github.com/awesohame/portfolio",
        demo: "https://awesohame.vercel.app/",
        tags: ["NextJs", "TailwindCSS"],
    },
]

