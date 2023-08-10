import HomeJson from '../json/HomeJson'
import ListaHome from '../components/ListaHome'

const HomePage = () => {
    return (
        <main className="container-xxl mt-1 mt-lg-3 mb-3">
            <ListaHome json={HomeJson} />
        </main>
    )
}

export default HomePage