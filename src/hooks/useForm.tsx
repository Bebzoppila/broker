import { useState } from "react";


function useForm<T>(defaultFornState: T){
    const [formState, setFormState] = useState({ name: '', sum: 'менее 500 $', phone: '' });

    const updateFormState = (key: keyof typeof formState, newText: string) => {
        setFormState({ ...formState, [key]: newText })
    }
    return {
        formState,
        updateFormState
    }
}

 export default useForm 