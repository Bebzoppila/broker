import { FC, useState } from "react"
type CustomSelectProps = {
    options: Array<string>,
    defaultSelect: string,
    updateFormState: (text: string) => void
}

const CustomSelect: FC<CustomSelectProps> = ({ defaultSelect, options, updateFormState}) => {
    const [selectIsOpen, setSelectIsOpen] = useState(false)
    const [activSelect, setActivSelect] = useState('')

    const updateActiveSelect = (option: string) => {
        setSelectIsOpen(false)
        setActivSelect(option)
        updateFormState(option)
    }

    return (
        <div className="select">
            <div onClick={() => setSelectIsOpen(!selectIsOpen)} className="select__active">
                <strong className={"select__active-text " + (activSelect ? ' ' : ' select__active-text--default')}>
                    {activSelect ? activSelect : defaultSelect}
                </strong>
                <img className="select__active-img" src="./images/Down.png" alt="Селект" />
            </div>

            <ul className={"select__options " + (selectIsOpen ? ' select__options--active' : ' ')}>
                {
                    options.map(option =>
                        <li onClick={() => updateActiveSelect(option)} key={option} className="select__option">
                            {option}
                        </li>)
                }
            </ul>
        </div>
    )
}


export default CustomSelect