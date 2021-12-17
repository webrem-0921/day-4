import CoastersList from "../../components/CoastersList/CoastersList"
import { Container, Button, Modal } from 'react-bootstrap'
import { useState, useContext } from "react";
import NewCoasterForm from "../../components/NewCoasterForm/NewCoasterForm"
import { MessageContext } from './../../context/userMessage.context'

function CoastersListPage(props) {

    const [showModal, setShowModal] = useState(false)
    const [refreshList, setRefreshList] = useState(false)

    const closeModal = () => setShowModal(false)
    const openModal = () => setShowModal(true)

    const { setShowMessage, setMessageInfo } = useContext(MessageContext)

    const finishFormActions = () => {
        setRefreshList(value => !value)
        setMessageInfo({ title: 'Finalizado', desc: 'La montaña rusa ha sido creada' })
        setShowMessage(true)
        closeModal()
    }

    return (
        <>
            <Container>
                <h1>Listado de montañas rusas <Button variant="dark" size="sm" onClick={openModal}>Crear nueva</Button></h1>
                <hr />
                <CoastersList refreshList={refreshList} />
            </Container>

            <Modal show={showModal} onHide={closeModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Crear nueva montaña rusa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewCoasterForm finishFormActions={finishFormActions} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CoastersListPage