import { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import { getOneCoaster } from '../../services/coasters.service'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'

function CoasterDetailsPage(props) {

    const [coaster, setCoaster] = useState({})
    const { coasterId } = useParams()

    useEffect(() => {
        getOneCoaster(coasterId)
            .then(response => setCoaster(response.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            {
                !coaster ? <LoadingSpinner /> :
                    <>
                        <h1>Detalles de {coaster.title}</h1>
                        <hr />
                        <Row className="justify-content-between">
                            <Col md={4}>
                                <h3>Información</h3>
                                <p>{coaster.description}</p>
                                <h3>Especificaciones</h3>
                                <p>Longitud: {coaster.length} metros</p>
                                <p>Inversiones: {coaster.inversions}</p>
                            </Col>
                            <Col md={6}>
                                <img style={{ width: '100%' }} src={coaster.imageUrl} alt={coaster.title} />
                            </Col>
                            <Link to="/listado">
                                <Button variant="dark">Volver</Button>
                            </Link>
                        </Row>
                    </>
            }
        </Container>
    )
}

export default CoasterDetailsPage