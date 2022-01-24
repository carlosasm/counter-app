import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
//import FirstApp from "./FirstApp";
import './style.css';

const divRoot = document.querySelector('#root');

ReactDOM.render( <CounterApp value={ 0 } />, divRoot );