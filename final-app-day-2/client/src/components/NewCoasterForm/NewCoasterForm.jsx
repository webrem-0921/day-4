import { useContext, useState } from "react"
import { Form, Button, Row, Col } from 'react-bootstrap'
import { saveCoaster } from "../../services/coasters.service"
import { MessageContext } from './../../context/userMessage.context'

function NewCoasterForm(props) {

    const [coasterForm, setCoasterForm] = useState({
        title: '',
        description: '',
        inversions: 0,
        length: 0,
        imageUrl: ''
    })

    const { title, description, inversions, length, imageUrl } = coasterForm

    const handleInputChange = e => {
        const { name, value } = e.target
        setCoasterForm({ ...coasterForm, [name]: value })
    }

    const { setShowMessage, setMessageInfo } = useContext(MessageContext)

    const handleFormSubmit = e => {
        e.preventDefault()

        saveCoaster(coasterForm)
            .then(() => props.finishFormActions())
            .catch(err => {
                setMessageInfo({ title: 'Error', desc: 'El formulario contiene errores' })
                setShowMessage(true)
            })
    }

    return (

        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
                <Form.Text className="text-muted">Mínimo 20 caracteres</Form.Text>
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="inversions">
                        <Form.Label>Inversiones</Form.Label>
                        <Form.Control type="number" value={inversions} onChange={handleInputChange} name="inversions" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="length">
                        <Form.Label>Longitud</Form.Label>
                        <Form.Control type="number" value={length} onChange={handleInputChange} name="length" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="imageUrl">
                        <Form.Label>Imagen (URL)</Form.Label>
                        <Form.Control type="text" value={imageUrl} onChange={handleInputChange} name="imageUrl" />
                    </Form.Group>
                </Col>
            </Row>

            <Button variant="dark" type="submit">Crear montaña rusa</Button>
        </Form>
    )
}

export default NewCoasterForm