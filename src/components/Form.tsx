
import { FC, FormEvent, useState } from "react"
import CustomSelect from "./CustomSelect"
import FormItem from "./FormItem";
const selectOptions = ['менее 500$', 'от 500$ до 1500$', 'более 1500$ рублей']
type FormProps = {
    sendToBack: (formData: string) => void
}   

const Form:FC<FormProps> = ({ sendToBack }) => {
    const [formState, setFormState] = useState({ name: '', sum: '', phone: '' });

    const updateFormState = (key: keyof typeof formState, newText: string) => {
        setFormState({ ...formState, [key]: newText })
    }

    const submitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        sendToBack(JSON.stringify(formState))
    }

    return (
        <form onSubmit={submitForm} className="form" action="">
            <h2 className="form__title">Получите пошаговую инструкцию</h2>
            <FormItem
                label="Ваше имя"
                updateFormState={(text: string) => updateFormState('name', text)}
            />
            <div className="form__item">
                <label className="form__item-label" htmlFor="">Сумма потерь</label>
                <CustomSelect
                    updateFormState={(text: string) => updateFormState('sum', text)}
                    defaultSelect="менее 500 $"
                    options={selectOptions}
                />
            </div>
            <FormItem
                label="Контактный телефон"
                plaseholder="+7 (000) 000-00-00"
                updateFormState={(text: string) => updateFormState('phone', text)}
            />
            <button className="btn form__btn">Получить бесплатно</button>
        </form>
    )
}

export default Form