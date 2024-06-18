import { Component, ReactNode } from 'react'

type propsType = {
    tema: string
    className?: string
}

export default function ClientePorValor(props: propsType){
    const {tema, className} = props

    return (
        <div className={'container-fluid border '+className}>
            <h2 className='text-center'>Clientes que mais gastaram</h2>
            <table className='table table-borderless text-center'>
            <thead>
                <tr>
                    <th scope="col">Nº</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Valor gasto</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>Cliente 2</td>
                    <td>R$ 800,00</td>
                </tr>
                <tr>
                    <td scope="row">2</td>
                    <td>Cliente 5</td>
                    <td>R$ 525,00</td>
                </tr>
                <tr>
                    <td scope="row">3</td>
                    <td>Cliente 4</td>
                    <td>R$ 372,00</td>
                </tr>
                <tr>
                    <td scope="row">4</td>
                    <td>Cliente 1</td>
                    <td>R$ 312,00</td>
                </tr>
                <tr>
                    <td scope="row">5</td>
                    <td>Cliente 3</td>
                    <td>R$ 216,00</td>
                </tr>
                <tr>
                    <td scope="row">6</td>
                    <td>Cliente 6</td>
                    <td>R$ 64,00</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}