import Pull_Tab from "./pull_tab";

interface Info_CardProps {
    onAddClick: () => void;
    infoCard: boolean;
}

export default function Info_Card({ onAddClick, infoCard }: Info_CardProps){
    return(
        <div className = {`
        w-75 h-110 md:h-145 p-10
        border-solid border-[#0B3954] border-5 rounded-4xl md:rounded-l-none dark:border-[#3dccc7]
        bg-white dark:bg-[#0B3954]
        duration-400
        ${ infoCard ? 'md:w-90' : 'md:w-80'}
        absolute md:right-0 z-1
        flex flex-col justify-center items-center
        dark:text-[#3dccc7]`}>
            <p>Hyunjae Ha</p>
            <p>Undergraduate Student @University of Melbourne</p>
            <p>Contact: contact@hyunha.com</p>
            <Pull_Tab onAddClick={ onAddClick } />
        </div>
    );
}