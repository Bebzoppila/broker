
import { FC, FormEvent, useState } from "react"
import CustomSelect from "./CustomSelect"
import FormItem from "./FormItem";
import FormPhone from "./FormPhone";

const selectOptions = ['менее 500$', 'от 500$ до 1500$', 'более 1500$ рублей']
type FormProps = {
    sendToBack: (formData: string) => void
}

const Form: FC<FormProps> = ({ sendToBack }) => {
    const [formState, setFormState] = useState({ name: '', sum: 'менее 500 $', phone: '' });

    const updateFormState = (key: keyof typeof formState, newText: string) => {
        setFormState({ ...formState, [key]: newText })
    }

    const isValid = () => {
        return /.../.test(formState.name) && /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(formState.phone)
    }

    const submitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (isValid()) {
            sendToBack(JSON.stringify(formState))
        }
    }

    return (
        <form onSubmit={submitForm} className="form" action="">
            <h2 className="form__title">Получите пошаговую инструкцию</h2>
            <FormItem
                pattern={/.../}
                label="Ваше имя"
                updateFormState={(text: string) => updateFormState('name', text)}
                value={formState.name}
            />
            <div className="form__item">
                <label className="form__item-label" htmlFor="">Сумма потерь</label>
                <CustomSelect
                    updateFormState={(text: string) => updateFormState('sum', text)}
                    defaultSelect="менее 500 $"
                    options={selectOptions}
                />
            </div>
            <FormPhone
                pattern={/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/}
                label="Телефон"
                updateFormState={(text: string) => updateFormState('phone', text)}
                value={formState.phone}
            />
            <button className="btn form__btn">Получить бесплатно</button>
        </form>
    )
}
export default Form