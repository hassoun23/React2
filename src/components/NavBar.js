import react from 'react';
import realstocklogo from '../LOGO.png';
import { Link, NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container">
          <NavLink to={"/"} className="navbar-brand" href="#"><img src={realstocklogo} alt="" width="200px" /></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Link to={`/`}>
                <li className="nav-item">
                  <h3 className="nav-link active" aria-current="page" >Home</h3>
                </li>
              </Link>
              <Link to={`/Productos`}>
                <li className="nav-item">
                  <h3 className="nav-link" >Productos</h3>
                </li>
              </Link>
              <Link to={`/Ofertas`}>
                <li className="nav-item">
                  <h3 className="nav-link">Ofertas</h3>
                </li>
              </Link>

            </ul>
            <div>
              <i className="fas fa-shopping-cart" aria-hidden="true" id="btnCarrito"></i><span id="badgeCarrito" class="w3-badge">0</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;