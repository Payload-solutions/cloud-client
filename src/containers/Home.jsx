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
import deep from '../assets/static/home.jpg';

const Home = () => (
    <div>
        <main className="index">
            <div>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="display-2">Implementación de redes neuronales en la elaboración de Yogur</h2>
                            <div className="card">
                                <div className="card-body">
                                    <strong><p>En este proyecto se investigó la manera de implementar redes neuronales 
                                        para la predicción y elaboración de Yogurt a partir del pH de un compuesto lactoso.</p></strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={deep} className="img-head " alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
);

export default Home;