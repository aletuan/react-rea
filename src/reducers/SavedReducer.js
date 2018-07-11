import data from './data.json';

const INITIAL_STATE = data.saved;

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      default: 
         return state;
   };
};