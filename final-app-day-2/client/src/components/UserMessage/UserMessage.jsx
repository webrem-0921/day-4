import { Toast, ToastContainer } from 'react-bootstrap'
import { useContext } from 'react'
import { MessageContext } from './../../context/userMessage.context'

function UserMessage() {

    const { showMessage, setShowMessage, messageInfo } = useContext(MessageContext)

    return (
        <ToastContainer className="p-3" position={'bottom-end'}>
            <Toast onClose={() => setShowMessage(false)} show={showMessage} delay={3000} autohide>
                <Toast.Header>
                    <strong className="me-auto">{messageInfo.title}</strong>
                </Toast.Header>
                <Toast.Body>{messageInfo.desc}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default UserMessage