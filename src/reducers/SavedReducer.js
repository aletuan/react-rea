import data from './data.json';
import { ADD_ITEM_SAVED, REMOVE_ITEM_SAVED } from '../actions/type';

const INITIAL_STATE = data.saved;

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case ADD_ITEM_SAVED:
         console.log("payload: " + action.payload);         
         return state.concat({
            "price": "$726,500",
            "agency": {
                "brandingColors": {
                    "primary": "#ffe512"
                },
                "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
            },
            "id": "1",
            "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
         });
      default: 
         return state;
   };
};