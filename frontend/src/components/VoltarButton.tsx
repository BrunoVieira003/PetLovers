import { useNavigate } from "react-router-dom";
import IconButton from "./IconButton";

type propsType = {
    link: string
}

export default function VoltarButton(props: propsType){
    const navigate = useNavigate()
    const {link} = props
    return (
        <>
        <IconButton
            icon={<i className="bi bi-chevron-left"></i>}
            label="Voltar"
            onClick={()=>{
                navigate(link)
            }}
        />
        </>
    )
}