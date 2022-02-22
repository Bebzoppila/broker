import {  FC } from "react"
import InputMask from "react-input-mask";
import useInput from "../../hooks/useInput"
type FormItemProps = {
    updateFormState: (text: string) => void,
    plaseholder?: string,
    label: string,
    value: string,
    pattern: RegExp
}
const FormPhone: FC<FormItemProps> = ({ updateFormState, value, label, pattern }) => {

    const {
        isValid,
        onBlur,
        onChange,
    } = useInput(pattern, (text) => updateFormState(text))

    return (
        <div className="form__item">
            <label className="form__item-label" htmlFor="">{label}</label>
            <InputMask 
            onBlur={onBlur} className={"form__item-input " + (!isValid ? " " : "form__item-input--danger")} mask="9 (999) 999 99 99" onChange={onChange} value={value} />
        </div>
    )
}

export default FormPhone