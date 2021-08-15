import React, { useEffect, useState } from 'react';
import {APIFLASKM1} from '../links/links';
import { Line } from 'react-chartjs-2';

const Chartvalues = () => {

    const [accuracies, Setaccuracies] = useState([]);
    const [valAccuracies, Setvalaccuracies] = useState([]);
    const [valLosses, Setvallosses] = useState([]);
    const [losses, Setlosses] = useState([]);
    //const [rangeVals, Setrangevals] = useState([]);

    // const APIFLASKM1 = "http://127.0.0.1:5000/charting";
    useEffect(() => {
        fetch(APIFLASKM1)
            .then(response => response.json())
            .then(data => Setaccuracies(data.classification.accuracy) || Setlosses(data.classification.loss) ||Setvallosses(data.classification.val_loss) || Setvalaccuracies(data.classification.val_accuracy))
    }, [])

    let rangeVals = [];
    for (let i =1; i < 81; i++) {
        rangeVals.push(i)
    }

    const state = {


        labels: rangeVals,
        datasets: [
            {
                label: "Entrenamiento",
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(247, 100, 128, 0.4)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 2,
                data: losses
            },
            {
                label: "Validación",
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgb(252, 20, 11)',
                //borderWidth: 2,
                data: valLosses
            }

        ]
    }

    const classifiactionAcc = {


        labels: rangeVals,
        datasets: [
            {
                label: "Precisión",
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(247, 100, 128, 0.4)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 2,
                data: accuracies
            },
            {
                label: "Validación",
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgb(252, 20, 11)',
                //borderWidth: 2,
                data: valAccuracies
            }

        ]
    }

    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">
                                Precisión del entrenamiento.
                            </h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Con 1000 entrenamientos, se corroboró que alcanzamos una precisión aceptable para la red y evitamos caer en el overfitting,
                                adicional que los parámetros son los adecuadors para hacer el entrenamiento.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Line
                data={state}
                options={{
                    title: {
                        display: true,
                        text: 'Average Rainfall per month',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    },scales: {
                        x: {
                            title: {
                                color: 'black',
                                font: {
                                    size: 16
                                },
                                display: true,
                                text: 'Validez del entrenamiento'
                            }
                        },
                        y: {
                            title: {
                                color: 'black',
                                font: {
                                    size: 16
                                },
                                display: true,
                                text: 'Entrenamiento realizado'
                            }
                        }
                    }
                }}
            />

            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">
                                Precisión de la predicción.
                            </h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Podemos verificar que el entrenamiento y su respectiva validación, en un punto
                                se verifica que empieza a unificarse los valores, corroborando que el entrenamiento
                                tiene un alto grado de precisión.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Line
                data={classifiactionAcc}
                options={{
                    title: {
                        display: true,
                        text: 'Average Rainfall per month',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    },scales: {
                        x: {
                            title: {
                                color: 'black',
                                font: {
                                    size: 16
                                },
                                display: true,
                                text: 'Validez de la precisión'
                            }
                        },
                        y: {
                            title: {
                                color: 'black',
                                font: {
                                    size: 16
                                },
                                display: true,
                                text: 'Precisión'
                            }
                        }
                    }
                }}
            />
        </div>
    );
}

export default Chartvalues;