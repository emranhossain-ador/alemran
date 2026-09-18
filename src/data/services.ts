import { CodeXml, Palette, Search, Server, Smartphone, Wrench } from "lucide-react";
import type { ServiceType } from "../types/service";

export const  serviceInfo:ServiceType[] = [
    { 
        icon: CodeXml,
        title: 'Frontend Development', 
        description: "Modern, responsive interfaces built with React, TypeScript, and Tailwind — pixel-perfect and fast." ,
        technology: ["React & Next.js", "TypeScript", "Tailwind CSS"],
    },
    { 
        icon: Server,
        title: 'Backend Development', 
        description: "Robust, secure APIs and databases designed to scale with your business needs." ,
        technology: ["Node.js & Express", "php", "Laravel", "PostgreSQL", "MySql"],
    },
    { 
        icon: Smartphone, 
        title: 'Responsive Design', 
        description: "Flawless experiences across mobile, tablet, and desktop with mobile-first workflows." ,
        technology: ["Mobile-first", "Cross-browser", "Accessibility"],
    },
    { 
        icon: Palette, 
        title: 'UI / UX Design', 
        description: "Clean, intuitive interfaces that focus on usability and delightful interactions." ,
        technology: ["Wire-Frames ", "Prototyping", "Design systems"],
    },
    { 
        icon: Search, 
        title: 'SEO Optimization', 
        description: "Technical SEO, semantic markup, and performance tuning so users actually find your site." ,
        technology: ["Core Web Vitals ", "Meta & OG tags", "Structured data"],
    },
    { 
        icon: Wrench, 
        title: 'Maintenance & Support', 
        description: "Ongoing updates, bug fixes, and performance improvements to keep things running smoothly." ,
        technology: ["Bug fixes ", "Feature updates", "Performance audits"],
    },
]