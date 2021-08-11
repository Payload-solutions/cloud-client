import React, { useEffect, useState } from 'react';
import APIFLASKM1 from '../links/links';
import { Line } from 'react-chartjs-2';

const Chartvalues = () => {

    const [accuracies, Setaccuracies] = useState([]);
    const [valLosses, Setvallosses] = useState([]);
    const [losses, Setlosses] = useState([]);
    const [maelacts, Setmaelacts] = useState([]);
    const [maestrep, Setmaestrep] = useState([]);

    // const APIFLASKM1 = "http://127.0.0.1:5000/charting";
    useEffect(() => {
        fetch(APIFLASKM1)
            .then(response => response.json())
            .then(data => Setaccuracies(data.classification.accuracy) || Setlosses(data.classification.loss) ||
                Setmaelacts(data.maelact) || Setmaestrep(data.maestrep) || Setvallosses(data.classification.val_loss))
    }, [])
    
    console.log("val_losses: ", valLosses);
    console.log("losses: ", losses);
    let labelStack = [];

    for (let i=1; i < 81; i++){
        labelStack.push(i)
    }

    const state = {


        labels: labelStack,
        datasets: [
            {
                label: "Entrenamiento",
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(247, 100, 128, 0.4)',
                borderColor: 'rgb(75, 192, 192)',
                //borderWidth: 2,
                data: losses
            },
            {
                label: "Validación",
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: valLosses
            }

        ]
    }

    const lactState = {
        datasets: [{
          label: 'Scatter Dataset',
          data: maelacts,
          backgroundColor: 'rgb(255, 99, 132)'
        }],
      };

    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">
                                Error medio absoluto
                            </h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Podemos apredciar, la cantidad de ruido que genera el error medio absoluto.
                                En varios entrenamientos reaelizados, con esta cantidad de valores podemos generar varias predicciones
                                acertadas, ya que con este entrenamiento evitamos el overfitting y el underfitting.
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
                    }
                }}
            />
            

            <Line
                data={lactState}
                options={{
                    title: {
                        display: true,
                        text: 'Average Rainfall per month',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        </div>
    );
}

export default Chartvalues;