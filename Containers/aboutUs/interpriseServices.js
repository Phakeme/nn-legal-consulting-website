import React from 'react'
import { MapData } from '../../Components/about/mapData';
import Data from "../../Data/interpriseServices.json";

export function EnterpriseServices() {
    return (
        <MapData data={Data} />
    )
}