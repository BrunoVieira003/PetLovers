import { Component, ReactNode } from "react";

type props = {
    title: string
    id: string
    children: ReactNode
}

export default class Modal extends Component<props>{
    render(): ReactNode {
        return (
            <div className="modal fade" id={this.props.id} tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">{this.props.title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary">Enviar</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}