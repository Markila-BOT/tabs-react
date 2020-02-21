import { DELETE_ELEMENT, ADD_ELEMENT, SHOW_ODD_ELEMENTS } from './actionTypes';

export const deleteElement = element => {
  return {
    type: DELETE_ELEMENT,
    element
  };
};

export const addElement = element => {
  return {
    type: ADD_ELEMENT,
    element
  };
};
