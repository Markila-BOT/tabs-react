import { DELETE_ELEMENT, ADD_ELEMENT } from '../actions/actionTypes';

const initialState = [
  'London',
  'Warsaw',
  'Manila',
  'Berlin',
  'Moskow',
  'Belgrad',
  'Bogota'
];

const elementReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ELEMENT:
      const newAddedState = [...state, action.element];
      return newAddedState;
    case DELETE_ELEMENT:
      const newDeletedState = state.filter(
        element => element !== action.element
      );
      return newDeletedState;
    default:
      return state;
  }
};

export default elementReducer;
