import { Component, ReactNode } from 'react'

type propsType = {
    tema: string
    className?: string
}

export default function MaisConsumidos(props: propsType){
    const {tema, className} = props
    return (
        <div className={'container-fluid border '+className}>
            <h2 className='text-center'>Produtos/Serviços mais consumidos</h2>
            <table className='table table-borderless text-center'>
            <thead>
                <tr>
                    <th scope="col">Nº</th>
                    <th scope="col">Produtos/Serviços consumidos</th>
                    <th scope="col">Qtd.</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>Produto 6</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td scope="row">2</td>
                    <td>Serviço 5</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td scope="row">3</td>
                    <td>Serviço 2</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td scope="row">4</td>
                    <td>Produto 1</td>
                    <td>7</td>
                </tr>
                <tr>
                    <td scope="row">5</td>
                    <td>Produto 3</td>
                    <td>7</td>
                </tr>
                <tr>
                    <td scope="row">6</td>
                    <td>Serviço 4</td>
                    <td>3</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}