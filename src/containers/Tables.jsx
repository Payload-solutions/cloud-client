import React, { useEffect, useState } from 'react';
import "../assets/styles/components/Tables.scss"
import { APIFlask } from '../links/links'
import { Line } from 'react-chartjs-2';
import TableContent from '../components/TableContent';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
// import { Collapse, Button, CardBody, Card } from 'reactstrap';
/**
 *@author Arturo Negreiros
 * this sections will contain the values extracted from the database, that is, cassandra sql
 */


const Tables = () => {
    const [numbers, Setnumbers] = useState([]);
    const [bacterias, Setbacterias] = useState([]);
    const [times, Settime] = useState([]);

    const [tableInfo, setTableInfo] = useState(false);
    const toggleTableinfo = () => setTableInfo(!tableInfo);

    //const APIFlask = "http://192.168.100.8:4000/bacteria";
    useEffect(() => {
        fetch(APIFlask)
            .then(response => response.json())
            .then(data => Settime(data.time) || Setbacterias(data.bacteria) || Setnumbers(data.datas))
    }, []);



    const growthBacteria = {
        labels: times,
        datasets: [
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
                    <div className="col-md-3">
                        <div className="container p-4">
                            <div >
                                <table className="table table-bordered table-striped table-condensed table-fixed">
                                    <thead>
                                        <tr>
                                            <th className="col">#</th>
                                            <th className="col">Tiempo</th>
                                            <th className="col">Crecimiento logarítimico</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            numbers.map(element =>
                                                <tr key={element.id}>
                                                    <td className="col">{element.id}</td>
                                                    <td className="col"> {element.time}</td>
                                                    <td className="col"> {element.bacteria}</td>
                                                </tr>

                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
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
                    <div className="col-md-12">
                        <Button color="success" onClick={toggleTableinfo} style={{ marginBottom: '1rem' }}>Parámetros de evaluación</Button>
                        <Collapse isOpen={tableInfo}>
                            <div className="table__strain">

                                <TableContent />
                            </div>
                        </Collapse>

                    </div>

                </div>


            </div>



        </div>
    );
}

export default Tables;