import React, { useEffect, useState } from 'react';
import "../assets/styles/components/Tables.scss"
import { APIFlask } from '../links/links'
import { Line } from 'react-chartjs-2';
import TableContent from '../components/TableContent';
/**
 *@author Arturo Negreiros
 * this sections will contain the values extracted from the database, that is, cassandra sql
 */


const Tables = () => {
    const [numbers, Setnumbers] = useState([]);
    const [bacterias, Setbacterias] = useState([]);
    const [times, Settime] = useState([]);

    //const APIFlask = "http://192.168.100.8:4000/bacteria";
    useEffect(() => {
        fetch(APIFlask)
            .then(response => response.json())
            .then(data => Settime(data.time) || Setbacterias(data.bacteria) || Setnumbers(data.datas))
    }, []);

    console.log(bacterias);

    const growthBacteria = {
        labels: times,
        datasets: [
            /*{
                label: "Tiempo de crecimiento",
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(247, 100, 128, 0.4)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 2,
                data: times
            },*/
            {
                label: "Crecimiento logarítmico",
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgb(252, 20, 11)',
                //borderWidth: 2,
                data: bacterias
            }

        ]
    }

    return (
        <div>
            <div className="table_content">
                <div className="row">
                    <div className="col-md-6">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Indice</th>
                                    <th scope="col">Tiempo</th>
                                    <th scope="col">Crecimiento logarítimico</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    numbers.map(element =>
                                        <tr key={element.id}>
                                            <td>{element.id}</td>
                                            <td> {element.time}</td>
                                            <td> {element.bacteria}</td>
                                        </tr>

                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6">
                        <div className="containter p-2">
                            <div className="row">
                                <div className="col-md-12" id="card__content_table">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="card-title">Crecimiento bacteriano en 24 horas</h5>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">
                                                Podemos verificar como el crecimiento bacteriano a través de 24 horas,
                                                es logarítmico.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <Line
                                data={growthBacteria}
                                options={{
                                    title: {
                                        display: true,
                                        text: 'Average Rainfall per month',
                                        fontSize: 30
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right'
                                    },
                                    scales: {
                                        x: {
                                            title: {
                                                color: 'black',
                                                font: {
                                                    size: 16
                                                },
                                                display: true,
                                                text: 'Tiempo'
                                            }
                                        },
                                        y: {
                                            title: {
                                                color: 'black',
                                                font: {
                                                    size: 16
                                                },
                                                display: true,
                                                text: 'Crecimiento bacteriano'
                                            }
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <TableContent />
                </div>


            </div>



        </div>
    );
}

export default Tables;