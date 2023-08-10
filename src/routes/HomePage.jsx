import HomeJson from '../json/HomeJson'
import ListaHome from '../components/ListaHome'

const HomePage = ({ idioma }) => {
    return (
        <main className="container-xxl mt-1 mt-lg-3 mb-3">
            <ListaHome json={HomeJson} idioma={idioma} />
        </main>
    )
}

export default HomePage