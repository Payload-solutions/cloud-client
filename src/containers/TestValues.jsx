import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { APISingleStrep } from '../links/links';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import TableContent from '../components/TableContent';
import BacteriaStrain from '../forms/BacteriaStrain';
/**
 * 
 * [minimum_milk_proteins, titratable_acidity, pH_milk_sour_, fat_milk_over_100mg_
 */

/**
 * {
    "targetBacterian": 4.106, 
    "minProteins": 2.591, 
    "tritatableAcid": 0.992, 
    "phSour": 4.415, 
    "fatMilk": 3.1925
}
 */




const TestValues = () => {




    const [isOpen, setIsOpen] = useState(false);
    const [formOpen, setFormOpen] = useState(false);
    const [classOpen, setClassification] = useState(false);


    const tableToggle = () => setIsOpen(!isOpen);
    const togleForm = () => setFormOpen(!formOpen);
    const togleClass = () => setClassification(!classOpen)

    // const handleInput = event => {
    //     Setvalues({
    //         ...form,
    //         [event.target.name]: event.target.value
    //     })
    // }
    // const [form, Setvalues] = useState({
    // });
    // const [resVals, Setresvals] = useState({

    // });
    // const handleSubmit = event => {
    //     event.preventDefault();
    //     axios.post("http://127.0.0.1:5000/strep", {
    //         "targetBacterian": 4.106,
    //         "minProteins": 2.591,
    //         "tritatableAcid": 0.992,
    //         "phSour": 4.415,
    //         "fatMilk": 3.1925
    //     })
    //         .then(res => {
    //             console.log(res);
    //             console.log(res.data);
    //             Setresvals(res.data.data.prediction);
    //         })

    // }


    return (
        <div className="container p-4">

            
            <div className="row">
                <Button outline color="secondary" onClick={togleForm} style={{ marginBottom: '1rem' }} block>Prediccion bacteriana</Button>
                <Collapse isOpen={formOpen}>
                    <BacteriaStrain />
                </Collapse>
                <Button outline color="success" onClick={togleClass} style={{ marginBottom: '1rem' }}>Red de clasificación</Button>
                <Collapse isOpen={classOpen}>
                    <TableContent />
                </Collapse>
                <Button outline color="success" onClick={tableToggle} style={{ marginBottom: '1rem' }}>Tabla de valores</Button>
                <Collapse isOpen={isOpen}>
                    <TableContent />
                </Collapse>
                

            </div>

        </div>


    );
};

// const mapDispatchToProps = {
//     bacteriaRequest,
// }
export default TestValues;
// export default connect(null, mapDispatchToProps)(TestValues);

