import Pull_Tab from "./pull_tab";

interface Info_CardProps {
    onAddClick: () => void;
    infoCard: boolean;
}

export default function Info_Card({ onAddClick, infoCard }: Info_CardProps){
    return(
        <div className = {`
        w-75 h-110 p-10
        border-solid border-[#0B3954] border-5 rounded-4xl dark:border-[#3dccc7]
        bg-white dark:bg-[#0B3954]
        duration:100
        ${ infoCard ? 'z-1' : 'z-1'}
        absolute
        flex flex-col justify-center items-center
        dark:text-[#3dccc7]`}>
            <p>I really like Hatsune Miku</p>
            <p>Did you stumble upon this site?</p>
            <p>It's still under construction. Sorry!</p>
            <Pull_Tab onAddClick={ onAddClick } />
        </div>
    );
}