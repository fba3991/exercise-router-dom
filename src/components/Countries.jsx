import React, { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
const apiKey = import.meta.env.VITE_API_KEY; 

const Countries = () => {
  const [countries, setCountries] = useState([]); //Utilizza lo stato per gestire l'elenco dei paesi. Inizialmente, l'array dei paesi è vuoto.

  useEffect(() => {//useEffect che viene eseguito al montaggio del componente
    fetch(`https://restcountries.com/v3.1/all?api_key=${apiKey}`) //promise che fa una richiesta get per ottenere dati
      .then((response) => response.json()) //resposne della promise e poi trasfotmata in un oggetto
      .then(data => setCountries(data));//trasforma lo stato con la richiesta.
       
      
  },[]);

  return (
    <div className="country-container">
      {countries.map((country, i) => (//Map dell' array dei paesi e per ciascun paese, renderizza il componente CountryCard.
        <CountryCard key={i}    //. La chiave (key) è necessaria per una chiave di lettura migliore per react..
        country={country}/>    //
      ))
      }

    </div>
  );
};

export default Countries;

