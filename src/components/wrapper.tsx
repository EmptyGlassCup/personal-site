import Card from "./card";
import Info_Card from "./info_card";
import { useState } from "react";


export default function Wrapper(){
    const [infoCard, setInfoCard] = useState(false);

    function addCard(){
        setInfoCard(!infoCard);
    }

    return (
        <div id = "wrapper" className = {`
        flex items-center justify-center
        relative

        w-75 h-110
        transition-width duration-400
        ease-in-out`}>
            <Card infoCard={ infoCard }/>
            <Info_Card onAddClick = { addCard } infoCard={ infoCard } />
        </div>
    );
}

//