import data from './data.json';
import { ADD_ITEM_SAVED, REMOVE_ITEM_SAVED } from '../actions/type';
import QueryItem from './QueryItem';

const INITIAL_STATE = data.saved;

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case ADD_ITEM_SAVED:
         //let item = data.results.filter(s => s.id == action.payload);
         let item = QueryItem(action.payload);
         console.log('---> ' + JSON.stringify(item));
         return state.concat(item);
      case REMOVE_ITEM_SAVED:
         return state.filter(s => s.id != action.payload);
      default: 
         return state;
   };
};