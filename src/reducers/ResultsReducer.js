import data from './data.json';
import { ADD_ITEM_SAVED, REMOVE_ITEM_SAVED } from '../actions/type';
import QueryItem from './QueryItem';

const INITIAL_STATE = data.results;

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case ADD_ITEM_SAVED:       
         return state.filter(s => s.id != action.payload);
      case REMOVE_ITEM_SAVED:
         let item = QueryItem(action.payload);
         return state.concat(item);
      default: 
         return state;
   };
};