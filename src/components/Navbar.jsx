import "../css/Navbar.css"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1> BEBITO SALUDABLE</h1>
            <div className="links">
                <a href="http://">PRODUCTOS</a>
                <a href="http://">UNIVERSO BEBITO SALUDABLE</a>
                <a href="http://">CONTACTO</a>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar