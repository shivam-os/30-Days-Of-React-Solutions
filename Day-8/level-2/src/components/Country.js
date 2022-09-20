import React from "react";
import { useState } from "react";
import {countriesData} from "./data/countries_data.js";

export default function Country() {

  const [myCountry, setMyCountry] = useState(countriesData[0]);

  function changeCountry() {
    let index = Math.floor(Math.random() * countriesData.length);
    setMyCountry(
      {
        name: countriesData[index].name,
        capital: countriesData[index].capital,
        languages : countriesData[index].languages,
        population : countriesData[index].population,
        currency: countriesData[index].currency
      }
    )
  }

  return (
    <div className="country--section">
      <div className="country">
        <h2>{myCountry.name}</h2>
        <p><span className="country-bold">Capital: </span>{myCountry.capital}</p>
        <p><span className="country-bold">Languages: </span>{myCountry.languages}</p>
        <p><span className="country-bold">Population: </span>{myCountry.population}</p>
        <p><span className="country-bold">Currency: </span>{myCountry.currency}</p>
      </div>
      <button onClick={changeCountry} >Change</button>
    </div>
  );
}