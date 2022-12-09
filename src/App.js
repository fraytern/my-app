import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Head from './Navbar';
import Roster from './Roster';
import Gtown from './Gtown';
import ImageSlider from './ImageSlider';
import Button from 'react-bootstrap/Button';
import SlideTest from './SlideTest';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

function App () {
  return (
    <BrowserRouter>
    <div className="App">
      <Head />
    </div>
    </BrowserRouter>
  );
}

export default App;
