import { ADD_ITEM_SAVED, REMOVE_ITEM_SAVED } from './type';

export const addItemSaved = (cardId) => {
   return {
      type: ADD_ITEM_SAVED,
      payload: cardId
   };
};

export const removeItemSaved = (cardId) => {
   return {
      type: REMOVE_ITEM_SAVED,
      payload: cardId
   };
};
