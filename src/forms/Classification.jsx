import React, { useState } from 'react';
import axios from 'axios';


const Classification = () => {
    const handleInput = event => {
        Setvalues({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    const [form, Setvalues] = useState({
    });
    const [resVals, Setresvals] = useState({

    });
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

        // console.log(form);
        // props.history.push("/response")
    }
    // console.log(resVals);
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
                    <button type="submit" className="btn btn-success">Enviar</button>
                </div>

            </form>
        </div>
    );
};

export default Classification;