import data from './data.json';
import { ADD_ITEM_SAVED, REMOVE_ITEM_SAVED } from '../actions/type';

const INITIAL_STATE = data.results;

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      default: 
         return state;
   };
};