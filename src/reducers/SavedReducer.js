import data from './data.json';
import { ADD_ITEM_SAVED, REMOVE_ITEM_SAVED } from '../actions/type';

const INITIAL_STATE = data.saved;

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case ADD_ITEM_SAVED:
         //FIXME: reducer should not be able to access other state ?
         let item = data.results.filter(s => s.id == action.payload);
         return state.concat(item);
      default: 
         return state;
   };
};