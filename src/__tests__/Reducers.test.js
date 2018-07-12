import configureStore from 'redux-mock-store';
import combineReducers from '../reducers';
import { addItemSaved, removeItemSaved } from '../actions';
import data from '../reducers/data.json';

describe('Testing reducers', () => {
   const initialState = {
      results: data.results,
      saved: data.saved
   };

   const mockStore = configureStore();
   let store;
   
   beforeEach(() => {
      store = mockStore(initialState);
   });

   it('should loading initial items from json', () => {
      const action = { type: 'loading_action' };
      // need to confirm loading state
      expect(combineReducers(undefined, action)).toEqual(initialState);
   });

   it('should add item to saved list', () => {
      let action = addItemSaved(1);
      
      let item = data.results.filter(item => item.id == action.payload);

      let expectedState = {
         results: data.results.filter(item => item.id != action.payload),
         saved: data.saved.concat(item)
      };      

      expect(combineReducers(initialState, action)).toEqual(expectedState);
   });

   it('should remove item from saved list', () => {
      let action = removeItemSaved(4);
      
      let item = data.saved.filter(item => item.id == action.payload);

      let expectedState = {
         results: data.results.concat(item),
         saved: data.saved.filter(item => item.id != action.payload)
      };      

      expect(combineReducers(initialState, action)).toEqual(expectedState);
   });   

});