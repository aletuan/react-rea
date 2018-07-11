import React from 'react';
import { shallow } from 'enzyme';
import CardIem from '../components/CardItem';
import { CardBody, CardImg } from 'reactstrap';

describe('CardItem layout test', () => {

   let wrapper;
   let item = {
      logo: "abc",
      mainImage: "abc",
      price: "$123,789"
   };

   beforeEach(() => {
      wrapper = shallow(<CardIem logo={item.logo} mainImage={item.mainImage} price={item.price} />);
   });

   it('should display logo', () => {
      const answer = wrapper.find('.cardHeaderStyle');
      expect(answer.find('.cardLogoStyle').prop('src')).toBe(item.logo);
   });

   it('should display main image', () => {
      const answer = wrapper.find('CardBody');
      expect(answer.find(CardImg).prop('src')).toBe(item.mainImage);
   });

   it('should display pricing', () => {
      const answer = wrapper.find('.cardFooterStyle');
      expect(answer.children().text()).toBe(item.price);
   });
});