import React from 'react';
import { shallow } from 'enzyme';
import { cardItem, CardContainer } from '../components/CardContainer';

describe('Destructure nested object test', () => {
   let item = {
      "price": "$726,500",
      "agency": {
          "brandingColors": {
              "primary": "#ffe512"
          },
          "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
      },
      "id": "1",
      "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
   };

   it('should get right object from nested', () => {
      const card = cardItem(item);
      expect(card.id).toEqual(item.id);
      expect(card.logo).toEqual(item.agency.logo);
      expect(card.mainImage).toEqual(item.mainImage);
      expect(card.primary).toEqual(item.agency.brandingColors.primary);
   })
})

describe('CardContainer layout test', () => {

   let wrapper;
   let cardItems;
   let item = {
      "price": "$726,500",
      "agency": {
          "brandingColors": {
              "primary": "#ffe512"
          },
          "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
      },
      "id": "1",
      "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
   };   

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

   it('should contain 1 children', () => {
      cardItems = [item];
      wrapper = shallow(<CardContainer title="Testing" cardItems={cardItems} />);

      const answer = wrapper.find('.cardContainerBodyStyle');
      expect(answer.children()).toHaveLength(cardItems.length);
   });

});