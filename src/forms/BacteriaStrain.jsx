import React, { useState } from 'react';
import axios from 'axios';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
const BacteriaStrain = () => {

    const handleInput = event => {
        Setvalues({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    const [form, Setvalues] = useState({
    });
    const [resVals, Setresvals] = useState({});

    const [information, setInformation] = useState(false);
    const [singlePrecision, setSinglePrecision] = useState(false);
    const togglePrecision = () => setSinglePrecision(!singlePrecision);
    const toggleInformation = () => setInformation(!information);


    const handleSubmit = event => {
        event.preventDefault();
        axios.post("http://127.0.0.1:5000/strep", {
            "targetBacterian": 4.106,
            "minProteins": 2.591,
            "tritatableAcid": 0.992,
            "phSour": 4.415,
            "fatMilk": 3.1925
        })
            .then(res => {
                Setresvals(res.data.data.prediction);
            })
    }
    return (
        <div>
            <h3 className="display-3">Simulación de predicción.</h3>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="row">
                    <div className="form-group col-md-6">
                        <div className="form-floating mb-3">
                            <input
                                name="targetBacterian"
                                type="number"
                                step="any"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Predicción bacteriana"
                                onChange={handleInput}
                            />
                            <label htmlFor="floatingInput">Predicción bacteriana.</label>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <div className="form-floating mb-3">
                            <input
                                name="minProteins"
                                type="number"
                                step="any"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Proteínas mínimas"
                                onChange={handleInput}
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
                                className="form-control"
                                id="floatingInput"
                                placeholder="Ácido tritatable"
                                onChange={handleInput}
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
                                className="form-control"
                                id="floatingInput"
                                placeholder="pH suero de leche"
                                onChange={handleInput}
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
                                className="form-control"
                                id="floatingInput"
                                placeholder="Grasa de la leche sobre 100mg"
                                onChange={handleInput}
                            />
                            <label htmlFor="floatingInput">Grasa de la leche sobre 100mg</label>
                        </div>
                    </div>
                </div>
                <div className="container p-4">
                    {/* <button type="submit" className="btn btn-success">Correr</button> */}
                    <Button outline color="success" size="lg" block  >Correr</Button>
                </div>

            </form>

            {resVals.length >= 0 &&

                <div className="container p-4">
                    <div className="row">

                        <div className="container p-2">
                            <Button color="secondary" onClick={togglePrecision} style={{ marginBottom: '1rem' }}>Predicciones</Button>
                        </div>
                        <Collapse isOpen={singlePrecision}>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Precisión</th>
                                        <th>Valor predecido</th>
                                        <th>Valor real</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        resVals.map(element =>
                                            <tr key={element.index} className="card-body">
                                                <td>{element.prediction_range}</td>
                                                <td>{element.value_predicted}</td>
                                                <td>{element.target_data}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </Collapse>
                        <div className="container p-2">
                            <Button color="warning" onClick={toggleInformation} style={{ marginBottom: '1rem' }}>Información</Button>
                        </div>
                        <Collapse isOpen={information}>
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


        </div >
    );
};


export default BacteriaStrain;