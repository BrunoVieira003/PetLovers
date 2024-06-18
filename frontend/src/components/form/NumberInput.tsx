type propsType = {
    id?: string
    label?: string
    required?: boolean,
    defaultValue?: number
}

export default function NumberInput(props: propsType){
    const {label, id, required, defaultValue} = props
    return (
        <div className="form-floating mb-3">
            <input type="number" className="form-control" id={id} placeholder="" name={id} required={required} defaultValue={defaultValue}/>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}