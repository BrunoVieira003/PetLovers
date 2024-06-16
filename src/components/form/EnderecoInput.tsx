import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Endereco } from "../../types/Cliente"

// bairro: string
// cidade: string
// codigoPostal: string
// rua: string
// numero: string

type propsType = {
    required?: boolean
    setState: Dispatch<SetStateAction<Endereco>>
}

function EnderecoInput(props: propsType){
    const {required, setState} = props

    const [rua, setRua] = useState<string>('')
    const [numero, setNumero] = useState<string>('')
    const [bairro, setBairro] = useState<string>('')
    const [cidade, setCidade] = useState<string>('')
    const [estado, setEstado] = useState<string>('')
    const [codigoPostal, setCodigoPostal] = useState<string>('')
    const [infoAdicionais, setInfoAdicionais] = useState<string>('')

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
    })

    return (
        <>
            <div className="input-group mb-3">
                <div className="form-floating form-floating-group w-75">
                    <input type="text" className="form-control" name="rua" placeholder="" onChange={(e) => {setRua(e.target.value)}}/>
                    <label htmlFor="rua">Rua</label>
                </div>
                <div className="form-floating form-floating-group w-25">
                    <input type="text" className="form-control" name="numero" placeholder="" onChange={(e) => {setNumero(e.target.value)}}/>
                    <label htmlFor="numero">Nº</label>
                </div>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" name="bairro" placeholder="" onChange={(e) => {setBairro(e.target.value)}}/>
                <label htmlFor="bairro">Bairro</label>
            </div>
            <div className="input-group mb-3">
                <div className="form-floating form-floating-group w-50">
                    <input type="text" className="form-control" name="cidade" placeholder="" onChange={(e) => {setCidade(e.target.value)}}/>
                    <label htmlFor="cidade">Cidade</label>
                </div>
                <div className="form-floating form-floating-group w-25">
                    <input type="text" className="form-control" name="estado" placeholder="" onChange={(e) => {setEstado(e.target.value)}}/>
                    <label htmlFor="estado">Estado</label>
                </div>
                <div className="form-floating form-floating-group w-25">
                    <input type="text" className="form-control" name="codigoPostal" placeholder="" onChange={(e) => {setCodigoPostal(e.target.value)}}/>
                    <label htmlFor="codigoPostal">Cod.</label>
                </div>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" name="infoAdicionais" placeholder="" onChange={(e) => {setInfoAdicionais(e.target.value)}}/>
                <label htmlFor="infoAdicionais">Informações adicionais</label>
            </div>
        </>
    )
}

export default EnderecoInput