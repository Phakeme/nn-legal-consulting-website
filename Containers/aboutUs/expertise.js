import React from 'react'
import { MapData } from '../../Components/about/mapData';
import Data from "../../Data/expertise.json";

export function Expertise() {
    return (
        <MapData data={Data} />
    )
}