import { ReactElement } from "react"

type propsType = {
    icon: ReactElement
    label?: string
    onClick?: any
    className?: string
    dataBsToggle?: "modal" | "collapse"
    dataBsTarget?: string
}

function IconButton(props: propsType){
    const {icon, label, className, onClick, dataBsTarget, dataBsToggle} = props

    return (
    <button 
        type="button"
        className={'btn d-flex align-items-center gap-2 fw-medium '+className}
        data-bs-toggle={dataBsToggle}
        data-bd-target={dataBsTarget}
        onClick={onClick}>
        {icon}{label}
    </button>
    )
}

export default IconButton