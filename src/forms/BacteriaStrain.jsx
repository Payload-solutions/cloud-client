import React, { useState } from 'react';
import axios from 'axios';
import { Collapse, Button } from 'reactstrap';
import { APISingleStrep, APISinlgeLact } from '../links/links';
import { width } from 'dom-helpers';



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

    let apiPost = null
    const handleSubmit = event => {
        event.preventDefault();
        console.log(form);
        if (form.chooseStrain === "lact") {
            apiPost = APISinlgeLact;
        } else {
            apiPost = APISingleStrep;
        }

        console.log(apiPost);
        axios.post(apiPost, form)
            .then(res => {
                Setresvals(res.data.data.prediction);
            });


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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
                                placeholder="Grasa de la leche sobre 100mg"
                                onChange={handleInput}
                            />
                            <label htmlFor="floatingInput">Grasa de la leche sobre 100mg</label>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <div className="form-floating mb-3">
                            <select name="chooseStrain"
                                className="form-select"
                                id="floatingSelect"
                                aria-label="Floating label select example"
                                onChange={handleInput}
                            >
                                <option defaultValue>Sepa de bacteria a predecir</option>
                                <option value="strep">Streptococcus</option>
                                <option value="lact">Lactobacillus</option>
                            </select>
                            <label htmlFor="floatingInput">Sepa de bacteria a predecir</label>
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
                            <Button color="secondary" onClick={togglePrecision} style={{ marginBottom: '2rem' }}>Predicciones</Button>
                        </div>
                        <Collapse isOpen={singlePrecision}>
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
                        <div className="container p-2">
                            <Button color="warning" onClick={toggleInformation} style={{ marginBottom: '2rem' }}>Información</Button>
                        </div>
                        <Collapse isOpen={information}>
                            <div className="card text-white bg-success">
                                <div className="card-header">
                                    <h2 className="card-title">Información general</h2>
                                </div>
                                <div className="card-body">

                                </div>
                                <p className="card-text">
                                    Acabamos de verificar una predicción de la red neuronal de regresión lineal.
                                    La precisión es alta, debido a los múltiples entrenamientos y validaciones para
                                    evitar el overfitting y el underfitting.
                                </p>
                            </div>
                        </Collapse>
                    </div>

                </div>
            }
        </div >
    );
};


export default BacteriaStrain;

{/* <div className="card">
                                        <div className="card-header">
                                            <h5 className="card-title">Estado de predicción</h5>
                                        </div>
                                        <div className="card-body">
                                            {
                                                resVals.map(element =>

                                                    <div key={element.index}>
                                                        <h7 className="display-7">{element.prediction_range}</h7>
                                                        <h7 className="display-7">{element.value_predicted}</h7>
                                                        <h7 className="display-7">{element.target_data}</h7>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div> */}