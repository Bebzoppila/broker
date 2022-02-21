import  { FC, useEffect, useRef } from "react"
import FormThanks from "./FormThanks"
import send from "../api/sendToBack"

type ModalProps = {
    closeModal: () => void
}

const Modal: FC<ModalProps> = ({ closeModal }) => {
    const modalContent = useRef<HTMLDivElement>(null);

    const sendToBack = (formData: string) => {
        send(formData)
    }

    const checkPath = (event: MouseEvent) => {
        const path = event.composedPath() as Array<HTMLElement>

        if (modalContent.current) {
            if (!path.includes(modalContent.current)) {
                closeModal()
            }
        }
    }


    useEffect(() => {
        document.addEventListener('click', checkPath)
        return () => { document.removeEventListener('click', checkPath) }
    }, [])

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