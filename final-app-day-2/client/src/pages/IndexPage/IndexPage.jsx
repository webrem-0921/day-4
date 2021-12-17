import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function IndexPage() {
    return (
        <Container>
            <h1>Bienvenidxs a la MERN de montañas rusas</h1>
            <hr />
            <Link to="/listado">
                <Button variant="dark" size="xl">Ir a las montañas rusas</Button>
            </Link>
        </Container>
    )
}

export default IndexPage