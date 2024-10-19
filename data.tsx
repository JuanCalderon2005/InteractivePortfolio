import { CodeSquare, Contact, HomeIcon, UserRound, Briefcase, GitBranch } from "lucide-react";

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} className="text-gray-800 dark:text-white" />, // Cambia el color según el tema
        link: "/",
    },
    {
        id: 2,
        title: "About Me",
        icon: <UserRound size={25} className="text-gray-800 dark:text-white" />, // Cambia el color según el tema
        link: "/about-me",
    },
    {
        id: 3,
        title: "Projects",
        icon: <Briefcase size={25} className="text-gray-800 dark:text-white" />, // Cambia el color según el tema
        link: "/projects",
    },
    {
        id: 4,
        title: "Contact",
        icon: <Contact size={25} className="text-gray-800 dark:text-white" />, // Cambia el color según el tema
        link: "/contact",
    },
];


export const projects = [
    {
        id: 1,
        title: "Complexus",
        description: "COMPLEXUS is a private social network aimed at the owners of residential complexes.",
        image: "/images/complexus.jpg",
        github: "https://github.com/JuanAmezquitaAgredo/complexus_frontend.git"
    },
    {
        id: 2,
        title: "Health Hub",
        description: "Health Hub is a platform that allows you to keep track of your health and physical activity.",
        image: "/images/healthub.jpg",
        github: "https://github.com/JuanCalderon2005/Health-Hub-SPA-Frontend.git"
    },
    {
        id: 3,
        title: "Task Manager",
        description: "Task Manager is a platform that allows you to keep track of your tasks and projects.",
        image: "/images/taskmanager.jpg",
        github: "https://github.com/JuanCalderon2005/To-do-list.git"
    }

];
