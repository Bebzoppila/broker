import  { useEffect } from "react"

function useBackClick<T extends HTMLElement>(refElement: React.RefObject<T>, func: () => void){

    const checkPath = (event: MouseEvent) => {
        const path = event.composedPath() as Array<HTMLElement>
        const refCurrent = refElement.current || document.createElement('div')

        if (!path.includes(refCurrent)) {
            func()
        }
    }

    useEffect(() => {
        document.addEventListener('click', checkPath)
        return () => { document.removeEventListener('click', checkPath) }
    }, [])

}

export default useBackClick