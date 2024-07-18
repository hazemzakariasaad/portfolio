// src/data/skills.js
import frontendImage from '../assets/frontend.png';
import backendImage from '../assets/backend.png';
import mlImage from '../assets/ML.png';
import devopsImage from '../assets/devops.png'; // Renamed for clarity
import ui from '../assets/ui.png'; // Renamed for clarity
import Software from '../assets/software.png'; // Renamed for clarity
import tech from '../assets/tech.png'; // Renamed for clarity

const skillsData = [
    {
        id: "1",
        img: ui,
        title: "Front-End",
        points: ["HTML", "CSS", "JavaScript", "TypeScript","React"]
    },
    {
        id: "2",
        img: backendImage,
        title: "Back-End",
        points: ["Node.js", "Express", "Flask", "SQL", "MongoDB", "PostgreSQL", "Django"]
    },
    {
        id: "3",
        img: mlImage,
        title: "Machine Learning",
        points: ["Python", "TensorFlow", "Predictive Models"]
    },
    {
        id: "4",
        img: devopsImage,
        title: "DevOps",
        points: ["Docker Containers", "Kubernetes", "CI/CD Pipelines"]
    },
    {
        id: "5",
        img: frontendImage,
        title: "Programming Languages",
        points: ["JavaScript", "Java", "Python", "C++", "C"]
    },
    {
        id: "6",
        img: Software,
        title: "Software Development",
        points: ["Data Structures" , "Algorithms", "OOP", "Database Management"]
    },
    {
        id: "7",
        img: tech,  // Assuming using the same image for now
        title: "Additional Technologies",
        points: ["Qt", "Git", "Microservices", "RESTful API","Linux"]
    }
];

export default skillsData;
