import './CoasterCard.css'
import { Card, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CoasterCard({ title, imageUrl, _id }) {

    return (
        <Col md={4}>
            <Card className="CoasterCard">
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Link to={`/detalles/${_id}`}>
                        <Button variant="dark">Ver detalles</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CoasterCard