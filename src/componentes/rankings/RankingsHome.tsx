import {ReactNode, Component} from 'react'
import ClientePorConsumo from './ClientePorConsumo'
import ClientePorValor from './ClientePorValor'

type props = {
    tema: string
}

export default class RankingsHome extends Component<props>{
    render(): ReactNode {
        const { tema } = this.props
        return (
            <div className="container-fluid d-flex">
                <ClientePorConsumo tema={tema}/>
                <ClientePorValor tema={tema}/>
            </div>
        )
    }
}