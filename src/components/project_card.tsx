import Project_Tab from "./project_tab";

interface Info_CardProps {
    onAddClick: () => void;
    projectCard: boolean;
}

export default function Project_Card({ onAddClick, projectCard }: Info_CardProps){
    return(
        <div id = "project-card" className = {`
        w-75 h-110 md:h-145 p-10
        border-solid border-[#0B3954] border-5 rounded-4xl md:rounded-l-none dark:border-[#3dccc7]
        bg-white dark:bg-[#0B3954]
        [transition:width_400ms,background-color_100ms]
        ${ projectCard ? 'md:w-90 z-1' : 'md:w-80 z-0'}
        absolute md:right-0
        flex flex-col justify-center items-center
        dark:text-[#3dccc7]`}>
            <p className="text-center font-mono text-xs dark:text-[#3dccc7] font-bold">Project Card</p>
            <Project_Tab onAddClick={ onAddClick } />
        </div>
    );
}