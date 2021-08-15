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
    const [classVals, Setclassvals] = useState({

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
                Setclassvals(res.data.data.prediction);
            })

    }


    /**
     * 
     * 
     * streptococcus_initial_strain_cfu_ml
        lactobacillus_initial_strain_cfu_ml
        ideal_temperature_c
        minimum_milk_proteins
        titratable_acidity
        pH_milk_sour_
        fat_milk_over_100mg_
        lactobacillus_final_cfu_ml
        streptococcus_final_cfu_ml
     */



    return (
        <div>
            <h3 className="display-3">Red de clasificación.</h3>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="row">
                    <div className="form-group col-md-6">
                        <div className="form-floating mb-3">
                            <input
                                name="streptococcusStrainInicial"
                                type="number"
                                step="any"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Sepa inicial del estreptococo"
                                onChange={handleInput}
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
                                className="form-control"
                                id="floatingInput"
                                placeholder="Sepa inicial de lactobacillus"
                                onChange={handleInput}
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
                                className="form-control"
                                id="floatingInput"
                                placeholder="Temperatura ideal"
                                onChange={handleInput}
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
                    <div className="form-group col-md-6">
                        <div className="form-floating mb-3">
                            <input
                                name="streptococcusStrainFinal"
                                type="number"
                                step="any"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Sepa final del estreptococo"
                                onChange={handleInput}
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
                                className="form-control"
                                id="floatingInput"
                                placeholder="Sepa final del lactobacillus"
                                onChange={handleInput}
                            />
                            <label htmlFor="floatingInput">Sepa final del lactobacillus.</label>
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