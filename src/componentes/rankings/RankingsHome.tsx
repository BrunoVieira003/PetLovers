import {ReactNode, Component} from 'react'
import ClientePorConsumo from './ClientePorConsumo'
import ClientePorValor from './ClientePorValor'
import MaisConsumidos from './MaisConsumidos'

type props = {
    tema: string
}

export default class RankingsHome extends Component<props>{
    render(): ReactNode {
        const { tema } = this.props
        return (
            <div className="container-fluid d-flex flex-wrap flex-lg-nowrap">
                <ClientePorConsumo tema={tema}/>
                <ClientePorValor tema={tema}/>
                <MaisConsumidos tema={tema}/>
            </div>
        )
    }
}