import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import axios from 'axios';
import { APIMultipleClass } from '../links/links';


const RandomClassification = () => {
    const [classification, setClassification] = useState(false);
    const toggleClassification = () => setClassification(!classification)

    const [classVals, SetClassVals] = useState({});


    const classSubmit = event => {
        event.preventDefault();
        axios.post(APIMultipleClass, {
            "predictions": ["Low fat yogurt",
                "Low fat yogurt",
                "Regular yogurt",
                "Low fat yogurt",
                "Low fat yogurt",
                "Regular yogurt",
                "Low fat yogurt",
                "Regular yogurt",
                "Low fat yogurt",
                "Non fat yogurt",
                "Regular yogurt",
                "Regular yogurt",
                "Regular yogurt",
                "Low fat yogurt",
                "Low fat yogurt",
                "Regular yogurt",
                "Non fat yogurt"],
            "classification_data": [[5.315, 4.1610000000000005, 40.989, 2.595, 1.127, 4.593, 3.0811, 6.98, 8.92],
            [5.95, 4.402, 40.756, 2.668, 0.9620000000000001, 4.587, 2.0685, 7.39, 9.98],
            [4.314, 4.863, 41.549, 2.64, 0.975, 4.5969999999999995, 3.7364, 8.16, 7.24],
            [4.598, 4.623, 41.707, 2.676, 0.972, 4.428999999999999, 1.1644, 7.76, 7.71],
            [5.078, 4.465, 41.547, 2.519, 1.022, 4.5680000000000005, 1.429, 7.49, 8.52],
            [5.301, 4.957, 41.254, 2.552, 1.024, 4.527, 3.7457, 8.32, 8.89],
            [4.6080000000000005, 5.702000000000001, 40.602, 2.5639999999999996, 1.155, 4.511, 1.9436, 9.57, 7.73],
            [5.591, 5.332999999999999, 40.760999999999996, 2.434, 1.112, 4.553999999999999, 3.3364, 8.95, 9.38],
            [5.3020000000000005, 4.238, 41.646, 2.6289999999999996, 1.012, 4.405, 2.0494, 7.11, 8.9],
            [4.457, 4.423, 41.61, 2.658, 1.0070000000000001, 4.446000000000001, 1.0637, 7.42, 7.48],
            [4.743, 5.435, 41.32899999999999, 2.434, 1.113, 4.5, 3.4837, 9.12, 7.96],
            [5.914, 5.607, 40.421, 2.608, 1.055, 4.4239999999999995, 3.9938, 9.41, 9.92],
            [5.8020000000000005, 5.523, 41.742, 2.465, 0.978, 4.555, 3.4139, 9.27, 9.73],
            [4.646, 5.9479999999999995, 40.089, 2.559, 1.092, 4.449, 2.3242, 9.98, 7.79],
            [5.17, 5.08, 41.742, 2.673, 0.968, 4.452, 1.7912, 8.52, 8.67],
            [4.81, 5.837999999999999, 41.558, 2.557, 1.105, 4.582, 3.5575, 9.79, 8.07],
            [4.562, 4.833, 41.358999999999995, 2.654, 1.015, 4.488, 1.0795, 8.11, 7.65]]
        })
            .then(res => {
                console.log(res.data);
                SetClassVals(res.data.response);
            });
    }

    console.log(classVals);

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Predicción de multiples valores</h5>
                </div>
                <div className="card-body">
                    <p className="card-text"></p>
                    <form onSubmit={classSubmit} encType="multipart/form-data">
                        <div className="container p-2">
                            <Button color="success" size="lg" block  >Simular</Button>
                        </div>
                    </form>
                </div>

                {/* {classVals.length > 0 &&
                    <div className="container p-4">
                        <div className="row">
                            <div className="container p-2">
                                <Button color="secondary" onClick={toggleClassification} style={{ marginBottom: '2rem' }}>Predicciones</Button>
                            </div>
                            <Collapse isOpen={classification}>
                                <div className="col-md-12">
                                    <div className="card text-white bg-success">
                                        <div className="card-body">
                                            <h5 className="card-title">Estado de la predección</h5>
                                        </div>
                                        {
                                            resVals.map(element =>
                                                <ul key={element.index} className="list-group list-group-flush">
                                                    <li className="list-group-item">Valor de la precisión: <strong>{element.prediction_range}</strong></li>
                                                    <li className="list-group-item">Valor predecido: <strong>{element.value_predicted}</strong></li>
                                                    <li className="list-group-item">Valor real: <strong>{element.target_data}</strong></li>
                                                </ul>
                                            )
                                        }
                                    </div>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                } */}
            </div>
        </div>
    );
};

export default RandomClassification;


