import { NavLink } from "react-router-dom";
/* import "./CountryCard.scss" */
export default function CountryCard({country}) {
    console.log(country); // Controlla la struttura dell'oggetto
  
    return (
      <NavLink className="country-card" to={`country/${country.cca2}`} state={country}> {/*  Utilizza NavLink per creare un link di navigazione */}
        <label><mark>Country:</mark></label>
        <strong>{country.name.official}</strong> {/* Visualizza il nome ufficiale del paese  */}
        
      </NavLink>
    );
  }
  