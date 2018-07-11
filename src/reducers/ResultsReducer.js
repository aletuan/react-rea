import data from './data.json';

const INITIAL_STATE = data.results;

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      default: 
         return state;
   };
};