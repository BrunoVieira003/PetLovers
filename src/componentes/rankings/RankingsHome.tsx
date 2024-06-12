import {ReactNode, Component} from 'react'
import ClientePorConsumo from './ClientePorConsumo'

type props = {
    tema: string
}

export default class RankingsHome extends Component<props>{
    render(): ReactNode {
        const { tema } = this.props
        return (
            <div className="container-fluid">
                <ClientePorConsumo tema={tema}/>
            </div>
        )
    }
}