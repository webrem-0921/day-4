import { createContext, useState } from "react"

const MessageContext = createContext()

function MessageProviderWrapper(props) {

    const [showMessage, setShowMessage] = useState(false)
    const [messageInfo, setMessageInfo] = useState({ title: '', desc: '' })

    return (
        <MessageContext.Provider value={{ showMessage, setShowMessage, messageInfo, setMessageInfo }}>
            {props.children}
        </MessageContext.Provider>
    )
}

export { MessageProviderWrapper, MessageContext }