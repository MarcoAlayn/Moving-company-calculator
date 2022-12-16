import { INCREMENT_VALUES, DECREMENT_VALUES, RESET_VALUES } from "./Actions";

const initialState = {
  totalItems: 0,
  totalM2: 0,
  subTotal: 0,
  tax: 0,
  total: 0,
  dueToday: 0,
};

const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_VALUES:
      return {
        ...state,
        totalItems: state.totalItems + 1,
        totalM2: state.totalM2 + action.payload,
        subTotal: state.subTotal + action.payload * 200,
        tax: state.tax + action.payload * 200 * 0.16,
        total: state.total + action.payload * 200 + action.payload * 200 * 0.16,
        dueToday:
          state.dueToday +
          (action.payload * 200 + action.payload * 200 * 0.16) / 2,
      };

    case DECREMENT_VALUES:
      return {
        ...state,
        totalItems: state.totalItems > 0 ? state.totalItems - 1 : 0,
        totalM2: state.totalItems > 0 ? state.totalM2 - action.payload : 0,
        subTotal:
          state.totalItems > 0 ? state.subTotal - action.payload * 200 : 0,
        tax: state.totalItems > 0 ? state.tax - action.payload * 200 * 0.16 : 0,
        total:
          state.total - action.payload * 200 - action.payload * 200 * 0.16 < 0
            ? 0
            : state.total - action.payload * 200 - action.payload * 200 * 0.16,

        dueToday:
          state.totalItems > 0
            ? state.dueToday -
              (action.payload * 200 + action.payload * 200 * 0.16) / 2
            : 0,
      };

    case RESET_VALUES:
      return {
        ...state,
        totalItems: 0,
        totalM2: 0,
        subTotal: 0,
        tax: 0,
        total: 0,
        dueToday: 0,
      };
    default:
      return state;
  }
};

export default RootReducer;
