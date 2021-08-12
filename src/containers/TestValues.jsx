import React, {useState} from 'react';
import {connect} from 'react-redux';
// import { bacteriaRequest} from '../actions';




const TestValues = props => {


    const [form, Setvalues] = useState({
        //mimProteings: "",
    });


    const handleInput = event =>{
        Setvalues({
            ...form,
            [event.target.name]:event.target.value 
        })
    }

    const handleSubmit = event =>{
        event.preventDefault();
        // props.bacteriaRequest(form);
        console.log(form);
        props.history.push("/response")
    }   


    return (
        <div className="container p-4">
            <h1 className="card-text"> Prediccion bacteriana.</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="row">
                    <div className="form-group col-md-6">
                        <div className="form-floating mb-3">
                            <input 
                                name="idealTemperature"
                                type="text" 
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
                            type="text" 
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
                            type="text" 
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
                            type="text" 
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
                            type="text" 
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

// const mapDispatchToProps = {
//     bacteriaRequest,
// }
export default TestValues;
// export default connect(null, mapDispatchToProps)(TestValues);