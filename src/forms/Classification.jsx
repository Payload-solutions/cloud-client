import React, { useState } from 'react';
import axios from 'axios';
import { APISingleClass } from '../links/links';
import { Collapse, Button } from 'reactstrap';


const Classification = () => {
    const handleClassInput = event => {
        SetClassValues({
            ...classForm,
            [event.target.name]: event.target.value
        })
    }
    const [classForm, SetClassValues] = useState({
    });
    const [classVals, Setclassvals] = useState({

    });
    const handleClassSubmit = event => {
        event.preventDefault();
        console.log(classForm);
        axios.post(APISingleClass, classForm /*{
            fatMilk: "3.7457",
            idealTemperature: "41.254",
            lactobacillusStrainFinal: "8.32",
            lactobacillusStrainInicial: "4.957",
            minProteins: "2.552",
            phSour: "4.527",
            streptococcusStrainFinal: "8.89",
            streptococcusStrainInicial: "5.301",
            tritatableAcid: "1.024"
        }*/)
            .then(res => {
                Setclassvals(res.data.response);
            })

    }

    const [classButton, SetClassButton] = useState(false);
    const toggleClassButton = () => SetClassButton(!classButton);


    const [classInfo, SetClassInfo] = useState(false);
    const toggleClassInfo = () => SetClassInfo(!classInfo);

    // console.log(classVals.length);

    return (
        <div>
            <h3 className="display-3">Red de clasificación.</h3>
            <form onSubmit={handleClassSubmit} encType="multipart/form-data">
                <div className="row">
                    <div className="form-group col-md-6">
                        <div className="form-floating mb-3">
                            <input
                                name="streptococcusStrainInicial"
                                type="number"
                                step="any"
                                required
                                className="form-control"
                                id="floatingInput"
                                placeholder="Sepa inicial del estreptococo"
                                onChange={handleClassInput}
                            />
                            <label htmlFor="floatingInput">Sepa inicial del estreptococo.</label>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <div className="form-floating mb-3">
                            <input
                                name="lactobacillusStrainInicial"
                                type="number"
                                step="any"
                                required
                                className="form-control"
                                id="floatingInput"
                                placeholder="Sepa inicial de lactobacillus"
                                onChange={handleClassInput}
                            />
                            <label htmlFor="floatingInput">Sepa inicial del lactobacillus.</label>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <div className="form-floating mb-3">
                            <input
                                name="idealTemperature"
                                type="number"
                                step="any"
                                required
                                className="form-control"
                                id="floatingInput"
                                placeholder="Temperatura ideal"
                                onChange={handleClassInput}
                            />
                            <label htmlFor="floatingInput">Temperatura ideal</label>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <div className="form-floating mb-3">
                            <input
                                name="minProteins"
                                type="number"
                                step="any"
                                required
                                className="form-control"
                                id="floatingInput"
                                placeholder="Proteínas mínimas"
                                onChange={handleClassInput}
                            />
                            <label htmlFor="floatingInput">Proteínas mínimas</label>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <div className="form-floating mb-3">
                            <input
                                name="tritatableAcid"
                                type="number"
                                step="any"
                                required
                                className="form-control"
                                id="floatingInput"
                                placeholder="Ácido tritatable"
                                onChange={handleClassInput}
                            />
                            <label htmlFor="floatingInput">Ácido tritatable</label>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <div className="form-floating mb-3">
                            <input
                                name="phSour"
                                type="number"
                                step="any"
                                required
                                className="form-control"
                                id="floatingInput"
                                placeholder="pH suero de leche"
                                onChange={handleClassInput}
                            />
                            <label htmlFor="floatingInput">pH suero de leche</label>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <div className="form-floating mb-3">
                            <input
                                name="fatMilk"
                                type="number"
                                step="any"
                                required
                                className="form-control"
                                id="floatingInput"
                                placeholder="Grasa de la leche sobre 100mg"
                                onChange={handleClassInput}
                            />
                            <label htmlFor="floatingInput">Grasa de la leche sobre 100mg</label>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <div className="form-floating mb-3">
                            <input
                                name="streptococcusStrainFinal"
                                type="number"
                                step="any"
                                required
                                className="form-control"
                                id="floatingInput"
                                placeholder="Sepa final del estreptococo"
                                onChange={handleClassInput}
                            />
                            <label htmlFor="floatingInput">Sepa final del estreptococo.</label>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <div className="form-floating mb-3">
                            <input
                                name="lactobacillusStrainFinal"
                                type="number"
                                step="any"
                                required
                                className="form-control"
                                id="floatingInput"
                                placeholder="Sepa final del lactobacillus"
                                onChange={handleClassInput}
                            />
                            <label htmlFor="floatingInput">Sepa final del lactobacillus.</label>
                        </div>
                    </div>
                </div>
                <div className="container p-4">
                    {/* <button type="submit" className="btn btn-success">Correr</button> */}
                    <Button outline color="success" size="lg" block  >Correr</Button>
                </div>

            </form>
            {classVals.length > 0 &&

                <div className="container p-4">
                    <div className="row">

                        <div className="col-md-12">
                            <div className="container p-2">
                                <Button color="secondary" onClick={toggleClassButton} style={{ marginBottom: '1rem' }}>Predicciones</Button>
                            </div>
                            <Collapse isOpen={classButton}>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Mensaje del entrenamiento</th>
                                            <th>Valor predecido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            classVals.map(element =>
                                                <tr key={element.index} className="card-body">
                                                    <td>{element.message}</td>
                                                    <td>{element.predictions.accuracy_metrics}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </Collapse>
                        </div>
                        <div className="container p-2">
                            <Button color="warning" onClick={toggleClassInfo} style={{ marginBottom: '1rem' }}>Información</Button>
                        </div>
                        <Collapse isOpen={classInfo}>
                            <div className="card">
                                <div className="card-header">
                                    <h2 className="card-title">Información general</h2>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Acabamos de verificar una predicción de la red neuronal de regresión lineal.
                                        La precisión es alta, debido a los múltiples entrenamientos y validaciones para
                                        evitar el overfitting y el underfitting.
                                    </p>
                                </div>
                            </div>
                        </Collapse>
                    </div>

                </div>
            }
        </div>
    );
};

export default Classification;