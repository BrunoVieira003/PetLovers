import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react"
import { Endereco } from "../../types/Cliente"

type propsType = {
    required?: boolean
    state: [Endereco, Dispatch<SetStateAction<Endereco>>]
}

function EnderecoInput(props: propsType){
    const {required} = props
    const [state, setState] = props.state

    const [rua, setRua] = useState<string>(state.rua)
    const [numero, setNumero] = useState<string>(state.numero)
    const [bairro, setBairro] = useState<string>(state.bairro)
    const [cidade, setCidade] = useState<string>(state.cidade)
    const [estado, setEstado] = useState<string>(state.estado)
    const [codigoPostal, setCodigoPostal] = useState<string>(state.codigoPostal)
    const [infoAdicionais, setInfoAdicionais] = useState<string>(state.informacoesAdicionais)

    useEffect(()=>{
        const endereco: Endereco = {
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            codigoPostal: codigoPostal,
            informacoesAdicionais: infoAdicionais
        }

        setState(endereco)
    }, [rua, numero, bairro, cidade, estado, codigoPostal, infoAdicionais])

    useEffect(() => {
        setRua(state.rua)
        setNumero(state.numero)
        setBairro(state.bairro)
        setCidade(state.cidade)
        setEstado(state.estado)
        setCodigoPostal(state.codigoPostal)
        setInfoAdicionais(state.informacoesAdicionais)
    }, [state])

    return (
        <>
            <div className="input-group mb-3">
                <div className="form-floating form-floating-group w-75">
                    <input type="text" className="form-control" name="rua" placeholder="" onChange={(e) => {setRua(e.target.value)}} value={rua}/>
                    <label htmlFor="rua">Rua</label>
                </div>
                <div className="form-floating form-floating-group w-25">
                    <input type="text" className="form-control" name="numero" placeholder="" onChange={(e) => {setNumero(e.target.value)}} value={numero}/>
                    <label htmlFor="numero">Nº</label>
                </div>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" name="bairro" placeholder="" onChange={(e) => {setBairro(e.target.value)}} value={bairro}/>
                <label htmlFor="bairro">Bairro</label>
            </div>
            <div className="input-group mb-3">
                <div className="form-floating form-floating-group w-50">
                    <input type="text" className="form-control" name="cidade" placeholder="" onChange={(e) => {setCidade(e.target.value)}} value={cidade}/>
                    <label htmlFor="cidade">Cidade</label>
                </div>
                <div className="form-floating form-floating-group w-25">
                    <input type="text" className="form-control" name="estado" placeholder="" onChange={(e) => {setEstado(e.target.value)}} value={estado}/>
                    <label htmlFor="estado">Estado</label>
                </div>
                <div className="form-floating form-floating-group w-25">
                    <input type="text" className="form-control" name="codigoPostal" placeholder="" onChange={(e) => {setCodigoPostal(e.target.value)}} value={codigoPostal}/>
                    <label htmlFor="codigoPostal">Cod.</label>
                </div>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" name="infoAdicionais" placeholder="" onChange={(e) => {setInfoAdicionais(e.target.value)}} value={infoAdicionais}/>
                <label htmlFor="infoAdicionais">Informações adicionais</label>
            </div>
        </>
    )
}

export default EnderecoInput