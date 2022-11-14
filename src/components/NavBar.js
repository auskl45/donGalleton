export const NavBar=()=> {
    return (
        <div className="container "  >

            <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item ">
        <a className="nav-link" href="#/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#/">Venta <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/">Cocina</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/">Inventario</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/">Ganancia</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}