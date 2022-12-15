import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Roster from './Roster';
//import './custom.scss';
import reportWebVitals from './reportWebVitals';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Head from './Web Pages/Components/Navbar';
import Home from './Web Pages/Home';
import About from './Web Pages/About';
import RosterData from './RosterData';
import ScheduleFunc from './Schedule';

const router = createBrowserRouter ([
  {
    path: "/", 
    //element: <div>Hello World!</div>,
    element: <Home />,
  },

  {
    path: "/about", 
    element: <About />,
  },

  {
    path: "/roster", 
    element: <Roster />,
  },
  
  {
    path: "/schedule", 
    element: <ScheduleFunc />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/*
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
