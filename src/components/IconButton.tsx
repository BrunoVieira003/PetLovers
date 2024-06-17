import { ReactElement } from "react"

type propsType = {
    icon: ReactElement
    text?: string
    onClick?: any
    className?: string
}

function IconButton(props: propsType){
    const {icon, text, className, onClick} = props

    return (
    <button 
        type="button"
        className={'btn d-flex align-items-center gap-2 mb-3 fw-medium '+className}
        onClick={onClick}>
        {icon}{text}
    </button>
    )
}

export default IconButton