import { Outlet, NavLink } from "react-router-dom";

export default function Layout(){
    return(
        <div>
            <header>
            <nav>
        <menu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="countries">Countries</NavLink>
        </menu>
      </nav>
            </header>
            <main>
                <Outlet/> {/* Outlet è il punto in cui vengono renderizzati i componenti corrispondenti alle rotte */}
            </main>
            <footer></footer>
        </div>
    )
}