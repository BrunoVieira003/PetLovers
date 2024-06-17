import { Component, ReactNode } from 'react'

type propsType = {
    tema: string
}

export default function ClientePorConsumo(props: propsType){
    return (
        <div className='container-fluid border'>
            <h2 className='text-center'>Clientes que mais consumiram</h2>
            <table className='table table-borderless text-center'>
            <thead>
                <tr>
                    <th scope="col">Nº</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Produtos/Serviços consumidos</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>Cliente 5</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td scope="row">2</td>
                    <td>Cliente 2</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td scope="row">3</td>
                    <td>Cliente 4</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td scope="row">4</td>
                    <td>Cliente 3</td>
                    <td>7</td>
                </tr>
                <tr>
                    <td scope="row">5</td>
                    <td>Cliente 1</td>
                    <td>7</td>
                </tr>
                <tr>
                    <td scope="row">6</td>
                    <td>Cliente 6</td>
                    <td>3</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}