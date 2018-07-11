import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import combineReducers from '../reducers';
import data from '../reducers/data.json';
import App from '../App';
import PageContainer from '../components/PageContainer';

describe('Testing Root App', () => {
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
      const app = App(PageContainer);
      const wrapper = shallow(app);
      expect(wrapper).toMatchSnapshot();
   });

});