import { Link, NavLink } from "react-router-dom"

const Navbar = ({ idioma }) => {
    if (idioma === 'ptBR') var contato = { "link": "/contato", "nome": "Contato" }
    else var contato = { "link": "/contact", "nome": "Contact" }

    return (
        <header className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary-custom container-xxl mb-3 mb-lg-5">
                <div className="container-fluid">
                    <Link className='navbar-brand' to='/'><strong className="logo"><i className="bi bi-code-slash"></i>&nbsp;&nbsp;Cristian Leoncini</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end bg-primary-custom" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div className="offcanvas-header">
                            <h5 className="text-primary-custom" id="offcanvasNavbar2Label">Menu</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className='d-flex justify-content-between align-items-center w-100'>
                                <ul className="navbar-nav justify-content-start flex-grow-1 pe-lg-3 pe-0">
                                    <li className="nav-item me-3">
                                        <NavLink to='/'>Home</NavLink>
                                    </li>
                                    <li className="nav-item me-3">
                                        <NavLink to={contato.link}>{contato.nome}</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar