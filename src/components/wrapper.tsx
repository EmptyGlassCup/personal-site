import Card from "./card";
import Info_Card from "./info_card";
import { useState } from "react";


export default function Wrapper(){
    const [infoCard, setInfoCard] = useState(false);

    function addCard(){
        setInfoCard(!infoCard);
    }

    return (
        <div id = "wrapper" className = {`flex relative ${ infoCard ? "w-180" : "w-90"} transition-width duration-500 ease-in-out`}>
            <Card />
            <Info_Card onAddClick = { addCard } />
        </div>
    );
}