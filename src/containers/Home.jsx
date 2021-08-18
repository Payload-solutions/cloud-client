import React from 'react';
// import Header from '../components/Header';
// import About from '../components/About';
// import Footer from '../components/Footer'
// import Values from '../components/Values';
// import Catgories from '../components/Categories';
// import Carousel from '../components/Carousel';
// import CarouselItem from '../components/CarouselItem';
// import Categories from '../components/Categories';
//import '../assets/styles/App.scss';

import '../assets/styles/components/Home.scss';
import deep from '../assets/static/deep.jpg';
import nn from '../assets/static/nn.png';


const Home = () => (
    <div>
        <div className="container p-4">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="display-2">Implementación de redes neuronales en la elaboración de Yogur</h2>
                    <div className="card">
                        <div className="card-body">
                            <p>En este proyecto se investigó la manera de implementar redes neuronales
                                para la predicción y elaboración de Yogurt a partir del pH de un compuesto lactoso.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <img src={deep} className="img-fluid" alt="Responsive image" />
                    <strong><h5 className="display-5">¿Qué son las redes neuronales?</h5></strong>
                    <div className="card">
                        <div className="card-header">

                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Las redes neuronales no son algo de este siglo, desde los 1940 se viene investigando esta tecnología.
                                Con la investigación del psicólogo Donald Hebb y ayuda del matemático Alan Turing se empezó a probar las
                                primeras redes neuronales. Pero no fue hasta 1955 que Frank Rosenblatt inventó la primera red neuronal
                                conocida como perceptrón.
                            </p>
                            <p className="card-text">
                                En esta primera parte de la serie Entendiendo las redes neuronales vamos a entender cómo funcionan una red neuronal +
                                internamente.
                            </p>
                        </div>
                    </div>

                    <strong><h5 className="display-5">La neurona de una red neuronal</h5></strong>
                    <div className="card">
                        <div className="card-header">
                            
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Neurona, es una forma cool de llamarle a una función matemática que realiza una suma ponderada
                                de cada uno de los valores de entrada y la suma adicional de un término conocido como sesgo (bias).
                            </p>
                        </div>
                    </div>

                    <strong><h5 className="display-5">Layers (capas)</h5></strong>
                    <div className="card">
                        <div className="card-header">
                            
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Las redes neuronales están compuestas por capas, las capas son un conjunto de neuronas de la red neuronal 
                                ubicadas verticalmente, cada una de las capas realizan un cálculo y luego lo pasan a la siguiente capa. 
                                Así las neuronas de las capas siguientes pueden tener un aprendizaje jerarquizado, yendo desde un aprendizaje 
                                simple a uno complejo.Existen tres tipos de capas principales que conforman nuestras neuronas: input layer 
                                (capa de entrada), hidden layers (capas ocultas) y output layer (capa de salida).
                            </p>

                            <img src={nn} className="img-fluid" alt="Responsive image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Home;