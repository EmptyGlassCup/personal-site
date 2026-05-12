import Pull_Tab from "./pull_tab";

interface Info_CardProps {
    onAddClick: () => void;
    infoCard: boolean;
}

export default function Info_Card({ onAddClick, infoCard }: Info_CardProps){
    return(
        <div className = {`
        h-145 p-10
        border-solid border-[#0B3954] border-5 rounded-r-4xl dark:border-[#3dccc7]
        bg-white dark:bg-[#0B3954]
        absolute right-0 z-1
        flex flex-col justify-center items-center
        ${ infoCard ? "w-90" : "w-80"}
        transition-width duration-400 ease-in-out
        dark:text-[#3dccc7]`}>
            <p>I really like Hatsune Miku</p>
            <p>Did you stumble upon this site?</p>
            <p>It's still under construction. Sorry!</p>
            <Pull_Tab onAddClick={ onAddClick } />
        </div>
    );
}