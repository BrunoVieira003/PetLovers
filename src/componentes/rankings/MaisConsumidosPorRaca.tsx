import { Component, ReactNode } from 'react'

type propsType = {
    tema: string
}

export default function MaisConsumidosPorRaca(props: propsType){
    return (
        <div className='container-fluid border'>
            <h2 className='text-center'>Produtos/Serviços mais consumidos por raça</h2>
            <table className='table text-center'>
            <thead>
                <tr>
                    <th scope="col">Raça</th>
                    <th scope="col">Produtos/Serviços consumidos</th>
                </tr>
            </thead>
            <tbody>
                <tr className='align-middle'>
                    <td>Siamês</td>
                    <td>
                        <ul >
                            <li className='list-group-item'>12 unid. - Ração</li>
                            <li className='list-group-item'>10 unid. - Shampoo</li>
                            <li className='list-group-item'>09 unid. - Caminha</li>
                            <li className='list-group-item'>06 unid. - Caixa de areia</li>
                        </ul>
                    </td>
                </tr>
                <tr className='align-middle'>
                    <td>Bulldog</td>
                    <td>
                        <ul >
                            <li className='list-group-item'>16 unid. - Ração</li>
                            <li className='list-group-item'>10 unid. - Tosa</li>
                            <li className='list-group-item'>08 unid. - Banho</li>
                            <li className='list-group-item'>02 unid. - Coleira</li>
                        </ul>
                    </td>
                </tr>
                <tr className='align-middle'>
                    <td>Pinscher</td>
                    <td>
                        <ul >
                            <li className='list-group-item'>12 unid. - Ração</li>
                            <li className='list-group-item'>10 unid. - Banho</li>
                            <li className='list-group-item'>05 unid. - Caminha</li>
                            <li className='list-group-item'>02 unid. - Coleira</li>
                        </ul>
                    </td>
                </tr>
                <tr className='align-middle'>
                    <td>Vira-lata</td>
                    <td>
                        <ul >
                            <li className='list-group-item'>02 unid. - Ração</li>
                            <li className='list-group-item'>02 unid. - Caminha</li>
                            <li className='list-group-item'>01 unid. - Tosa</li>
                            <li className='list-group-item'>01 unid. - Colar elizabetano</li>
                        </ul>
                    </td>
                </tr>
                <tr className='align-middle'>
                    <td>Husk</td>
                    <td>
                        <ul >
                            <li className='list-group-item'>06 unid. - Shampoo</li>
                            <li className='list-group-item'>05 unid. - Ração</li>
                            <li className='list-group-item'>03 unid. - Remédio</li>
                            <li className='list-group-item'>01 unid. - Tosa</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}