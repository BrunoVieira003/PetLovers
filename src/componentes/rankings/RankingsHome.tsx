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
            <div className="container-fluid row my-5 mx-auto">
                <ClientePorConsumo tema={tema} className='col'/>
                <ClientePorValor tema={tema} className='col'/>
                <MaisConsumidos tema={tema} className='col'/>
            </div>
            <div className="container-fluid row my-5 mx-auto">
                <MaisConsumidosPorRaca tema={tema} className='col'/>
                <MaisConsumidosPorTipo tema={tema} className='col'/>
            </div>
        </div>
    )
}