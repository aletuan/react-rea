import React from "react";
import ReactDOM from "react-dom";
import CardContainer from "./components/CardContainer";
import CardItem from "./components/CardItem";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

ReactDOM.render(
<Provider store={createStore(reducer)}>
   <CardContainer />
</Provider> ,document.getElementById("index"));