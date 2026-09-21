import type { ProjectType } from "../types/projectType";
import offerZone from "../assets/project-images/offerzone.png";
import shebaZone from "../assets/project-images/sheba-zone.png";
import devstack from "../assets/project-images/devstack.png";

export const projectInfo: ProjectType[] = [
    {
        image: offerZone,
        name: "OfferZone",
        description:
            "A modern, fully responsive e-commerce platform built with PHP, Laravel, Livewire, Alpine.js, and Tailwind CSS, featuring a clean UI and optimized mobile experience.",
        liveLink: "https://offerzonebd.com",
        githubLink: "https://github.com/emranhossain-ador/offerzonebd",
        tags: [
            "PHP",
            "Laravel",
            "Livewire",
            "Alpine.js",
            "Tailwind CSS",
        ],
    },
    {
        image: shebaZone,
        name: "Sheba Zone",
        description:
            "A modern, fully responsive e-commerce platform built with PHP, Laravel, Livewire, Alpine.js, and Tailwind CSS, featuring a clean UI and optimized mobile experience.",
        liveLink: "https://sheba.phplime.com/",
        githubLink: "",
        tags: [
            "PHP",
            "Laravel",
            "Livewire",
            "Alpine.js",
            "Tailwind CSS",
        ],
    },
    {
        image: devstack,
        name: "Devstack",
        description:
            "A modern, fully responsive dev stack sharing platform built with React, TypeScript, Tailwind CSS, and daisyui, featuring server-side rendering, API routes, and a clean, professional UI.",
        liveLink: "https://devstack-liard.vercel.app/",
        githubLink: "https://github.com/emranhossain-ador/devstack",
        tags: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "DaisyUI",
        ],
    }
];