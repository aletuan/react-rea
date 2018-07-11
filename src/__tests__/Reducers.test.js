import configureStore from 'redux-mock-store';
import combineReducers from '../reducers';
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
      //expect(ResultsReducer(undefined, action)).toEqual(initialState.results);
      //expect(SavedReducer(undefined, action)).toEqual(initialState.saved);
      expect(combineReducers(undefined, action)).toEqual(initialState);
   });

});