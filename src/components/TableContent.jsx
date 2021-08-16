import React, { useEffect, useState } from 'react';




const TableContent = () => {

    // const [tableInfo, setTableInfo] = useState(false);
    // const toggleTableinfo = () => setTableInfo(!tableInfo);
    return (
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
                    <td>4.001</td>
                    <td>5.998</td>
                    <td>UFC/ml</td>
                </tr>
                <tr>
                    <td>Temperatura ideal</td>
                    <td>40.001</td>
                    <td>42.00</td>
                    <td>C°</td>
                </tr>
                <tr>
                    <td>Ácido tritatable</td>
                    <td>0.95</td>
                    <td>1.19</td>
                    <td>pH</td>
                </tr>
                <tr>
                    <td>Grasa de la leche</td>
                    <td>1.003</td>
                    <td>3.9993</td>
                    <td>/100mg</td>
                </tr>
                <tr>
                    <td>Proteínas mínimas de leche</td>
                    <td>2.4</td>
                    <td>2.7</td>
                    <td>mg/100mg</td>
                </tr>
                <tr>
                    <td>pH suero de leche</td>
                    <td>4.4</td>
                    <td>4.6</td>
                    <td>pH</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
};

export default TableContent;


