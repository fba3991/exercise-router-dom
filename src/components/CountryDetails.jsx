import { useLocation, useParams } from "react-router-dom"

export default function CountryDetails(){
 /*    const {code}= useParams(); */
    const {state}= useLocation();//posizione del percorso, state e l'oggetto contenente i dati del paese, quando premiamo sul link ci mostra tutti i dati del paese da noi richiesti.
    console.log(state);
    return (
        <section className="coutry-details">
        <img src={state.flags.svg} />
        <strong>Official Name: {state.name.official}</strong>
        <strong>Capitale: {state.capital}</strong>
        <strong>Population: {state.population}</strong>
        </section>
    )
}

//state come se fosse la props coutry