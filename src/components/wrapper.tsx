import Card from "./card";
import Info_Card from "./info_card";
import { useState } from "react";
import Project_Card from "./project_card";
import Background_Card from "./background_card";


export default function Wrapper(){
    const [infoCard, setInfoCard] = useState(false);
    const [projectCard, setProjectCard] = useState(false);

    function InfoCard(){
        setInfoCard(!infoCard)
        if (projectCard){
        setProjectCard(!projectCard)
        }
    }

    function ProjectCard(){
        setProjectCard(!projectCard)
        if (infoCard){
            setInfoCard(!infoCard)
        }
    }

    return (
        <div id = "wrapper" className = {`
        flex items-center
        relative
        ${ infoCard || projectCard ? "md:w-179 md:h-150" : "md:w-90 md:h-150"}
        w-75 h-110
        transition-width duration-400
        ease-in-out`}>
            <Card infoCard={ infoCard } projectCard= {projectCard}/>
            <Info_Card onAddClick = { InfoCard } infoCard={ infoCard } />
            <Project_Card onAddClick = { ProjectCard } projectCard = { projectCard } />
            <Background_Card />
        </div>
    );
}

//