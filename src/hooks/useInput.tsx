import { ChangeEvent, useState } from "react"


const useInput = (pattern:RegExp, updateState: (text: string) => void) => {

    const [isValid, setIsValid] = useState(false)

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        updateState(event.target.value)
    }

    const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        if(!pattern.test(event.target.value)){
            setIsValid(true)
        }else {
            setIsValid(false)
            updateState(event.target.value)
        }   
    }

    return {
        isValid,
        onBlur,
        onChange
    }
}

export default useInput