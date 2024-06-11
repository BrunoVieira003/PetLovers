import { Component } from "react";
import Modal from "../modal";

type props = {
    tema: string
}

export default class FormularioCadastroPet extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <Modal title="Cadastro de pet" id="cadastroPet">
                    <form>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                        </div>
                        <select className="form-select" aria-label="Gênero">
                            <option selected>Escolha o gênero do pet</option>
                            <option value="m">Macho</option>
                            <option value="f">Fêmea</option>
                        </select>
                        <div className="input-group mb-3">
                            <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                        </div>
                    </form>
                </Modal>
            </div>
        )
    }
}