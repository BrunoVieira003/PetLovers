import { Component, ReactNode } from 'react'

type props = {
    tema: string
}

export default class MaisConsumidosPorRaca extends Component<props>{
    render(): ReactNode {
        return (
            <div className='container-fluid border'>
                <h2 className='text-center'>Produtos/Serviços mais consumidos</h2>
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
                            <ul className='list-group'>
                                <li className='list-group-item'>12 - Ração</li>
                                <li className='list-group-item'>10 - Shampoo</li>
                                <li className='list-group-item'>09 - Caminha</li>
                                <li className='list-group-item'>06 - Caixa de areia</li>
                            </ul>
                        </td>
                    </tr>
                    <tr className='align-middle'>
                        <td>Bulldog</td>
                        <td>
                            <ul className='list-group'>
                                <li className='list-group-item'>16 - Ração</li>
                                <li className='list-group-item'>10 - Tosa</li>
                                <li className='list-group-item'>08 - Banho</li>
                                <li className='list-group-item'>02 - Coleira</li>
                            </ul>
                        </td>
                    </tr>
                    <tr className='align-middle'>
                        <td>Pinscher</td>
                        <td>
                            <ul className='list-group'>
                                <li className='list-group-item'>12 - Ração</li>
                                <li className='list-group-item'>10 - Banho</li>
                                <li className='list-group-item'>05 - Caminha</li>
                                <li className='list-group-item'>02 - Coleira</li>
                            </ul>
                        </td>
                    </tr>
                    <tr className='align-middle'>
                        <td>Vira-lata</td>
                        <td>
                            <ul className='list-group'>
                                <li className='list-group-item'>02 - Ração</li>
                                <li className='list-group-item'>02 - Caminha</li>
                                <li className='list-group-item'>01 - Tosa</li>
                                <li className='list-group-item'>01 - Colar elizabetano</li>
                            </ul>
                        </td>
                    </tr>
                    <tr className='align-middle'>
                        <td>Husk</td>
                        <td>
                            <ul className='list-group'>
                                <li className='list-group-item'>06 - Shampoo</li>
                                <li className='list-group-item'>05 - Ração</li>
                                <li className='list-group-item'>03 - Remédio</li>
                                <li className='list-group-item'>01 - Tosa</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        )
    }
}