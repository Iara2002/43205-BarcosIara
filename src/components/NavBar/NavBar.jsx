import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link} from "react-router-dom";

const NavBar = () => {
  const imgLogo = "https://www.lifestylesports.com/on/demandware.static/-/Library-Sites-LSSSharedLibrary/default/dw472dd7b2/updated-logo/carousel-logos-black-Nike.png";
  
   return ( 
    <header>
         <Link to={"/"}>
    <h1>Inicio</h1>
   </Link>

     <img className='imgLogo' src={imgLogo} alt="Logo de Tienda" />
        <nav>
            <ul>
                <li>
                  <NavLink to={`/categoria/2`}>Ropa</NavLink>
                </li>
                <li>
                  <NavLink to={`/categoria/3`}>Calzados</NavLink>
                </li>
                <li>
                  <NavLink to={`/categoria/4`}>Niños</NavLink>
                </li>

            </ul>
        </nav>

        <CartWidget />

    </header>
    )
}
export default NavBar