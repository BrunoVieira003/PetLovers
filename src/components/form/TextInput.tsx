import { Dispatch, SetStateAction } from "react"

type propsType = {
    id?: string
    label?: string
    required?: boolean
    setState: Dispatch<SetStateAction<any>>
}

function TextInput(props: propsType){
    const {label, id, required, setState} = props
    return (
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id={id} placeholder="" name={id} required={required} onChange={(e) => {setState(e.target.value)}}/>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default TextInput