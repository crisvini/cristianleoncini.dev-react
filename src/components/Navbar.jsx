import { Link, NavLink } from "react-router-dom"

import { useContext } from 'react'
import { IdiomaContext } from '../context/IdiomaContext'

const Navbar = () => {
    const { idioma, setIdioma } = useContext(IdiomaContext)

    if (idioma === 'ptBR') var contato = { "link": "/contato", "nome": "Contato" }
    else var contato = { "link": "/contact", "nome": "Contact" }

    const handleIdioma = (e) => {
        setIdioma(e.target.value)
    }

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
                                <div className="d-flex justify-content-start align-items-start">
                                    <i className="bi bi-translate me-md-2 ms-2 ms-md-0 fs-5 order-1 order-md-0"></i>
                                    <select className="form-select form-select-sm order-0 order-md-1 w-6_5" onChange={handleIdioma} >
                                        <option value="enUS">en-US</option>
                                        <option value="ptBR">pt-BR</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar