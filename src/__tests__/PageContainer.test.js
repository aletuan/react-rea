import configureStore from 'redux-mock-store';
import React from 'react';
import { shallow } from 'enzyme';
import PageContainer from '../components/PageContainer';
import { CardContainer } from '../components/CardContainer';
import { Container, Row, Col} from 'reactstrap';

describe('PageContainer layout test', () => {

   const initialState = {
      results: [{
         "price": "$726,500",
         "agency": {
             "brandingColors": {
                 "primary": "#ffe512"
             },
             "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
         },
         "id": "1",
         "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
      }],
      saved: [{
         "price": "$726,500",
         "agency": {
             "brandingColors": {
                 "primary": "#ffe512"
             },
             "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
         },
         "id": "1",
         "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
      }],
   };   
   const mockStore = configureStore();
   let store;

   beforeEach(() => {
      store = mockStore(initialState);
   });

   it('should have two columns of properties', ()=> {
      const wrapper = shallow(<PageContainer store={store} />).dive();
      const answer = wrapper.find(CardContainer);
      expect(answer.length).toEqual(2);
   });

});