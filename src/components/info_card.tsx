import Pull_Tab from "./pull_tab";

export default function Info_Card({ onAddClick, infoCard }){
    return(
        <div className = {`
        h-150 p-10
        border-solid border-black border-5
        bg-white
        absolute right-0 z-1
        flex justify-center items-center
        ${ infoCard ? "w-90" : "w-80"}
        transition-width duration-400 ease-in-out`}>
            <p>Boo!</p>
            <Pull_Tab onAddClick={ onAddClick } />
        </div>
    );
}