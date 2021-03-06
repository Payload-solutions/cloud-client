import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import About from '../components/About';
import Layout from '../components/Layout';
import Tables from '../containers/Tables';
import Chartvalues from '../containers/Chartvalues';
import TestValues from '../containers/TestValues';
import ResponsePage from '../containers/ResponsePage';
import NotFound from '../containers/NotFound';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/tables" component={Tables}/>
                <Route exact path="/test" component={TestValues} />
                <Route exact path="/response" component={ResponsePage} />
                <Route exact path="/charting" component={Chartvalues}></Route>
                <Route component={NotFound}/>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;