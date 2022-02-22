import {   FC } from "react"
import useInput from "../../hooks/useInput"
type FormItemProps = {
    updateFormState: (text: string) => void,
    plaseholder?: string,
    label: string,
    value: string,
    pattern: RegExp
}


const FormItem: FC<FormItemProps> = ({ updateFormState, plaseholder = '', label, value, pattern }) => {

    const {
        isValid,
        onBlur,
        onChange,
    } = useInput(pattern, (text) => updateFormState(text))

    return (
        <div className="form__item">
            <label className="form__item-label" htmlFor="">{label}</label>
            <input
                value={value}
                placeholder={plaseholder}
                onBlur={onBlur}
                onChange={onChange}
                className={"form__item-input " + (!isValid ? " " : "form__item-input--danger")}
                type="text"
            />
        </div>
    )
}

export default FormItem