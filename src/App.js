import React from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const App = (Wrapped) => {
   const store = createStore(reducer);
   return (
      <Provider store={store}>
         <Wrapped />
      </Provider>
   );
};

export default App;