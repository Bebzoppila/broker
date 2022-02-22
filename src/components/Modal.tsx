import  { FC, useRef } from "react"
import FormThanks from "./FormThanks"
import send from "../api/sendToBack"
import useBackClick from "../hooks/useBackClick"
type ModalProps = {
    closeModal: () => void
}

const Modal: FC<ModalProps> = ({ closeModal }) => {
    const modalContent = useRef<HTMLDivElement>(null);

    useBackClick(modalContent, () => closeModal())
    
    const sendToBack = (formData: string) => {
        send(formData)
    }

    return (
        <div className={"modal modal--open"}>
            <div ref={modalContent} className="modal__content">
                <button onClick={() => closeModal()} className="modal__close">X</button>
                {
                    <FormThanks sendToBack={sendToBack} thanksImg="/images/thanksscales.png" />
                }
            </div>
        </div>
    )
}

export default Modal