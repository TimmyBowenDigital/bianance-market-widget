import React from "react";
import fetchMarketInfo from "../scripts/fetchMarketInfo";

const UnitList = (props) => {
    let fetchedData;
    fetchMarketInfo().then((result) => {
        fetchedData = result
        return fetchedData
    });


    return<div>
        <h1>Hello World!</h1>
        <ul>
            {fetchedData.map(data => (
                <li>{data.id}</li>
            ))}
        </ul>
    </div>
}

export default UnitList;

