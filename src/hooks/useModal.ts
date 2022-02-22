import { useEffect, useState } from "react"



const useModal = () => {
    const [modalState, setModalState] = useState(false);
    const closeModal = () => {
        setModalState(false)
    }
    
      const openModal = () => {
        setModalState(true)
    }

    useEffect(() => {
        if(modalState){
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '15px'
        }else {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0px'
        }
        
    }, [modalState])

    return {
        modalState,
        closeModal,
        openModal
    }
}

export default useModal