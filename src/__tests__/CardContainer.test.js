import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from '../components/CardContainer';

describe('CardContainer layout test', () => {

   let wrapper;
   let cardItems;

   beforeEach(() => {
      cardItems = [];
      wrapper = shallow(<CardContainer title="Testing" cardItems={cardItems} />);
   });

   it('should display title', () => {
      const answer = wrapper.find('.cardContainerHeaderStyle');
      expect(answer.children().text()).toBe("Testing");
   });

   it('should contain no children', () => {
      const answer = wrapper.find('.cardContainerBodyStyle');
      expect(answer.children()).toHaveLength(cardItems.length);
   });

});