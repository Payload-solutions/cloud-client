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
import home from '../assets/static/home.jpg';

const Home = () => (
    <main className="index">
        <div className="masthead d-flex">
            <div className="container p-4">


                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header title">
                                <em><h5 className="card-title">Welcome developers</h5></em>
                            </div>
                            <div className="card-body">
                                <strong><p>Here you can put your own code and request any question about coding</p></strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">

                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <em><strong><p>The only thing that is truly yours is your knowledge, always cultivate it and never let it perish ...</p></strong></em>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
);

export default Home;