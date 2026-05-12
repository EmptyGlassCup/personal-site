import Pull_Tab from "./pull_tab";

export default function Info_Card({ onAddClick }){
    return(
        <div className = {`w-90 h-150 p-10 border-solid border-black border absolute right-0 z-0`}>
            <Pull_Tab onAddClick={ onAddClick } />
        </div>
    );
}