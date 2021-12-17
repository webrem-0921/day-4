import { Route, Routes } from 'react-router-dom'
import CoastersListPage from '../pages/CoastersListPage/CoastersPage'
import CoasterDetailsPage from '../pages/CoasterDetailsPage/CoasterDetailsPage'
import IndexPage from '../pages/IndexPage/IndexPage'

function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/listado" element={<CoastersListPage />} />
            <Route path="/detalles/:coasterId" element={<CoasterDetailsPage />} />
            <Route path="*" element={<h1>Esto es un 404 :3</h1>} />
        </Routes>
    )
}

export default AppRoutes