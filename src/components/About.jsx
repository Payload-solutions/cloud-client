import React from 'react';
import '../assets/styles/components/About.scss'
import { Card, Button, Jumbotron, Container } from 'react-bootstrap';

const About = () => (
    <section className="main">
        <h2 className="main__title"></h2>
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
    </section>

);

export default About;