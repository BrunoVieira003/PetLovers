import { useNavigate } from "react-router-dom";
import IconButton from "./IconButton";

export default function VoltarButton(){
    const navigate = useNavigate()
    return (
        <>
        <IconButton
            icon={<i className="bi bi-chevron-left"></i>}
            label="Voltar"
            onClick={()=>{
                navigate(-1)
            }}
        />
        </>
    )
}