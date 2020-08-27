import * as actionType from "../actions";

const initialState = {
  persons: [],
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_PERSON:
      return {
        ...state,
        persons: state.persons.concat({
          id: Math.random(),
          name: "Max",
          age: Math.floor(Math.random() * 40),
          value: state.person,
        }),
      };
    case actionType.DELETE_PERSON:
      const personArray = state.persons.filter(
        (person) => person.id !== action.personId
      );
      return {
        ...state,
        persons: personArray,
      };
    default:
      break;
  }
  return state;
};

export default personReducer;
