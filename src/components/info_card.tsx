import Pull_Tab from "./pull_tab";

interface Info_CardProps {
    onAddClick: () => void;
    infoCard: boolean;
}

export default function Info_Card({ onAddClick, infoCard }: Info_CardProps){
    return(
        <div id="info-card" className = {`
        w-75 h-110 md:h-145 p-10
        border-solid border-[#0B3954] border-5 rounded-4xl md:rounded-l-none dark:border-[#3dccc7]
        bg-white dark:bg-[#0B3954]
        [transition:width_400ms,background-color_100ms]
        ${ infoCard ? 'md:w-90 z-1' : 'md:w-80 z-0'}
        absolute md:right-0
        flex flex-col justify-center items-center
        dark:text-[#3dccc7]`}>
            <p className="text-center font-mono text-xs dark:text-[#3dccc7] font-bold">Hyunjae Ha</p>
            <p className="text-center font-mono text-xs dark:text-[#3dccc7]">Undergraduate Student</p>
            <p className="text-center font-mono text-xs dark:text-[#3dccc7]">@University of Melbourne</p>
            <p className="text-center font-mono text-xs dark:text-[#3dccc7]">Contact: contact@hyunha.com</p>
            <Pull_Tab onAddClick={ onAddClick } />
        </div>
    );
}