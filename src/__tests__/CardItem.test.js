import React from 'react';
import { shallow } from 'enzyme';
import CardIem from '../components/CardItem';

describe('CardItem layout test', () => {

   beforeEach(() => {
      console.log('running before each testing layout');
   });

   it('should display logo', () => {
      const wrapper = shallow(<CardIem logo="abc" />);
      const answer = wrapper.find('.cardHeaderStyle');
      expect(answer.find('.cardLogoStyle').prop('src')).toBe("abc");
   });

   it('should display main image');
   it('should display pricing');
});