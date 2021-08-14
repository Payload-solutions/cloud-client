import React from 'react';



const TableContent = () => (
    <div>
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">¿Qué vamos a predecir?</h5>
            </div>
            <div className="card-body">
                <p className="card-text">Vamos a realizar simulaciones con respecto a los valores en parámetros correctos
                    para el crecimiento bacteriano</p>
            </div>
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Elemento</th>
                    <th scope="col">Rango mínimo</th>
                    <th scope="col">Rango máximo</th>
                    <th scope="col">Unidades</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sepa Streptococcus</td>
                    <td>4.004</td>
                    <td>5.998</td>
                    <td>UFC/ml</td>
                </tr>
                <tr>
                    <td>Sepa Lactobacillus</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Temperatura ideal</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Ácido tritatable</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Grasa de la leche</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Proteínas mínimas de leche</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>pH suero de leche</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default TableContent;