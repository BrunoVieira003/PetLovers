import {ReactNode, Component} from 'react'
import ClientePorConsumo from './ClientePorConsumo'
import ClientePorValor from './ClientePorValor'
import MaisConsumidos from './MaisConsumidos'
import MaisConsumidosPorRaca from './MaisConsumidosPorRaca'
import MaisConsumidosPorTipo from './MaisConsumidosPorTipo'

type propsType = {
    tema: string
}

export default function RankingsHome(props: propsType){
    const { tema } = props
    return (
        <div className='container-fluid'>
            <div className="container-fluid d-flex flex-wrap flex-lg-nowrap">
                <ClientePorConsumo tema={tema}/>
                <ClientePorValor tema={tema}/>
                <MaisConsumidos tema={tema}/>
            </div>
            <div className="container-fluid d-flex flex-wrap flex-lg-nowrap">
                <MaisConsumidosPorRaca tema={tema}/>
                <MaisConsumidosPorTipo tema={tema}/>
            </div>
        </div>
    )
}