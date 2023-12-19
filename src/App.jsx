import "./App.scss";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Countries from "./components/Countries";
 const apiKey = import.meta.env.VITE_API_KEY; 
import Layout from "./components/Layouts";
import Notfound from "./components/Notfound";
import CountryDetails from "./components/CountryDetails";
function App() {
  return (
    <>
      <Routes>
    
        <Route path="/" element={<Layout />}>  {/* Definisce una rotta per il percorso radice con il componente Layout */}
          <Route index element={<Home />} />
          {/* Rotta nidificata per il percorso radice, indice, con il componente Home */}
          <Route path="about" element={<About />} />
          {/* Rotta per il percorso "/about" con il componente About */}
          <Route path="countries">
            {/* Inizia una nuova rotta per "/countries" con rotte nidificate */}
            <Route index element={<Countries />} />
            {/* Rotta nidificata per "/countries" con il componente Countries */}
            <Route path="country/:code" element={<CountryDetails />} />
            {/* Route  dinamico ":code" per "/countries/country/:code" con il componente CountryDetails */}
          </Route>
          <Route path="*" element={<Notfound />} />
          {/* Rotta catch-all per gestire percorsi non corrispondenti con il componente Notfound */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
