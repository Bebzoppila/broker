import { FC, useRef } from "react"

type FormItemProps = {
    updateFormState: (text: string) => void,
    plaseholder?: string,
    label: string
}

const FormItem:FC<FormItemProps> = ({ updateFormState, plaseholder = '', label}) => {
    const inputItem = useRef<HTMLInputElement>(null);

    return(
        <div className="form__item">
        <label className="form__item-label" htmlFor="">{label}</label>
        <input  
        ref={inputItem}
        placeholder={plaseholder} onChange={(event) => updateFormState(event.target.value)} 
        className={"form__item-input "} 
        type="text" 
        />
    </div>
    )
}

export default FormItem