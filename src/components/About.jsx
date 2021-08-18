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
                                ¿Qué aprendimos?
                            </h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Si bien este fue un semestre lleno de retos, y trabajo duro como los demás, esto nos sirvió para
                                optimizar y mejorar nuestros conocimientos en un tema que ya no es parte del futuro, sino es el presente
                                como lo es la Inteligencia Artificial, pudimos ampliar nuestro horizonte de conocimientos. Es un tema que 
                                aún nos falta por conocer más, pero con estas bases sabemos que se nos hará más divertido el camino hacia la
                                sabiduría.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card mb-3">
                <img src={guys} className="card-img-top" alt="..." />
            </div>
        </div>
    </div>

);

export default About;