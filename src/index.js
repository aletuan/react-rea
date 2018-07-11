import React from "react";
import ReactDOM from "react-dom";
import PageContainer from "./components/PageContainer";
import CardItem from "./components/CardItem";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

ReactDOM.render(
<Provider store={createStore(reducer)}>
   <PageContainer />
</Provider> ,document.getElementById("index"));