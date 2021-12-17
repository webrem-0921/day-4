import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Link to="/" className='navbar-brand'>Coasters App</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                    <Nav>
                        <Link to="/" className='nav-link'>Home</Link>
                        <Link to="/listado" className='nav-link'>Montañas rusas</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation