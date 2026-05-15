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
        flex items-center
        relative
        ${ infoCard ? "w-179" : "w-90"}
        duration-400 ease-in-out`}>
            <Card />
            <Info_Card onAddClick = { addCard } infoCard={ infoCard } />
        </div>
    );
}