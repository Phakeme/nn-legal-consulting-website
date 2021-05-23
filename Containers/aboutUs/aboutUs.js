import React from 'react'
import Data from "../../Data/aboutUs.json";
import { MapData } from "../../Components/about/mapData";

export function AboutUs() {
    return (
        <MapData data={Data} />
    )
}