import { Component, ReactNode } from 'react'

type propsType = {
    tema: string
    className?: string
}

export default function MaisConsumidosPorTipo(props: propsType){
    const {tema, className} = props
    return (
        <div className={'container-fluid border '+className}>
            <h2 className='text-center'>Produtos/Serviços mais consumidos por tipo</h2>
            <table className='table text-center'>
            <thead>
                <tr>
                    <th scope="col">Tipo</th>
                    <th scope="col">Produtos/Serviços consumidos</th>
                </tr>
            </thead>
            <tbody>
                <tr className='align-middle'>
                    <td>Gato</td>
                    <td>
                        <ul >
                            <li className='list-group-item'>23 - Ração</li>
                            <li className='list-group-item'>19 - Shampoo</li>
                            <li className='list-group-item'>15 - Caminha</li>
                            <li className='list-group-item'>12 - Caixa de areia</li>
                        </ul>
                    </td>
                </tr>
                <tr className='align-middle'>
                    <td>Cachorro</td>
                    <td>
                        <ul >
                            <li className='list-group-item'>32 - Ração</li>
                            <li className='list-group-item'>28 - Tosa</li>
                            <li className='list-group-item'>26 - Banho</li>
                            <li className='list-group-item'>12 - Coleira</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}