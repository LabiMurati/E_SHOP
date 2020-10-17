import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Components
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

//Pages
import {Home} from './pages/Home/Home';
import {Shop} from './pages/Shop/Shop';
import {About} from './pages/About/About';
import {Contact} from './pages/Contact/Contact';
import {Product} from './pages/Product/Product';
import {ErrorPage} from './pages/ErrorPage/ErrorPage';

//Styles
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/product/:id" component={Product} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
