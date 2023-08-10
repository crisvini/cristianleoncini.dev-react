import { useContext } from 'react'
import { IdiomaContext } from '../context/IdiomaContext'

const ErrorPage = () => {
    const { idioma } = useContext(IdiomaContext)

    if (idioma === 'ptBR') var texto = 'Ops! A página que você está procurando não existe.'
    else var texto = 'Oops! The page you are looking for does not exist.'

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-md-6 text-center">
                    <h1 className="text-orange fs-10">Error 404</h1>
                    <p className="text-secondary-custom fs-4">{texto}</p>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage