import { FC, useState } from "react"
import Form from "./ui/Form"
import Thanks from "./ui/Thanks"

type FormThanksProps = {
    sendToBack: (text: string) => void,
    thanksImg: string
}

const FormThanks: FC<FormThanksProps> = ({ sendToBack, thanksImg }) => {

    const [thanksIsOpen, setThanksIsOpen] = useState(false)

    const FormSend = (text: string) => {
        sendToBack(text)
        setThanksIsOpen(true)
    }

    return (
        thanksIsOpen ?
            <Thanks subtitle="Ожидайте звонка профильного специалиста" img={thanksImg} />
            :
            <Form sendToBack={FormSend} />



    )
}

export default FormThanks