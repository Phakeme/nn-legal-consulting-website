import React from 'react'
import { MapData } from '../../Components/about/mapData';
import Data from "../../Data/whyChooseUs.json";

export function WhyChooseUs() {
    return (
        <MapData data={Data} />
    )
}