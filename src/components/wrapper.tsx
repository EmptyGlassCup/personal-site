import Card from "./card";
import Info_Card from "./info_card";
import Pull_Tab from "./pull_tab";
import { useState } from "react";


export default function Wrapper(){
    const [infoCard, setInfoCard] = useState(false);

    function addCard(){
        setInfoCard(!infoCard);

    }

    return (
        <div id = "wrapper" className = "flex overflow-visible relative">
            <Card />
            <Pull_Tab onAddClick={ addCard } />
            {infoCard && <Info_Card />}
        </div>
    );
}