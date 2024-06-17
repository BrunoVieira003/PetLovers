import { Dispatch, SetStateAction } from "react"

type propsType = {
    id?: string
    label?: string
    required?: boolean
    state: [string, Dispatch<SetStateAction<string>>]
}

function EmailInput(props: propsType){
    const {label, id, required} = props
    const[state, setState] = props.state
    return (
        <div className="form-floating mb-3">
            <input type="email" className="form-control" id={id} placeholder="" name={id} required={required} value={state} onChange={(e) => {setState(e.target.value)}}/>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default EmailInput