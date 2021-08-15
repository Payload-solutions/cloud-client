import React from 'react';
import '../assets/styles/components/About.scss'
import { Card, Button, Jumbotron, Container } from 'react-bootstrap';
import guys from '../assets/static/guys.png';



const About = () => (
    <div>
        {/* <section className="main">
            <h2 className="main__title"></h2>

        </section>
        */}
        <div className="container p-4">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="cart-title">
                                ¿Quienes somos nosotros?
                            </h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Utilizamos redes neuronales, capaces de predecir el crecimiento
                                bacteriano y capaces de clasificar los diferentes tipos de productos
                                de yogur en vase a sus variables principales.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card mb-3">
                <img src={guys} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            {/* <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <img src="..." className="card-img-bottom" alt="..." />
            </div> */}
        </div>
    </div>

);

export default About;