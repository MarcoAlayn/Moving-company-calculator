import { INCREMENT_VALUES, DECREMENT_VALUES, RESET_VALUES } from "./Actions";

const initialState = {
  totalItems: 0,
  totalM2: 0,
  subTotal: 0,
  tax: 0,
  total: 0,
  dueToday: 0,
  itemCount: 1,
};

const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_VALUES:
      return {
        ...state,
        totalItems: state.totalItems + 1, // Increment number of items selected in the form
        totalM2: Number((state.totalM2 + action.payload).toFixed(2)), // Total m2 of selected items
        subTotal: Number((state.subTotal + action.payload * 200).toFixed(2)), // 1m2 = $200
        tax: Number((state.tax + action.payload * 200 * 0.16).toFixed(2)), // Tax is 16%
        total: Number(
          (
            state.total +
            action.payload * 200 +
            action.payload * 200 * 0.16
          ).toFixed(2)
        ), // Total $
        dueToday: Number(
          (
            state.dueToday +
            (action.payload * 200 + action.payload * 200 * 0.16) / 2
          ).toFixed(2)
        ), // 50% of total
        itemCount: "initCount",
      };

    case DECREMENT_VALUES:
      return {
        ...state,
        totalItems: state.totalItems > 0 ? state.totalItems - 1 : 0, // Decrement number of items selected in the form
        totalM2:
          state.totalItems > 0
            ? Number((state.totalM2 - action.payload).toFixed(2))
            : 0, // Decrement Total m2 of selected items
        subTotal:
          state.totalItems > 0
            ? Number((state.subTotal - action.payload * 200).toFixed(2))
            : 0, // 1m2 = -$200
        tax:
          state.totalItems > 0
            ? Number((state.tax - action.payload * 200 * 0.16).toFixed(2))
            : 0, // Tax is -16%
        total:
          state.total - action.payload * 200 - action.payload * 200 * 0.16 < 0
            ? 0
            : Number(
                (
                  state.total -
                  action.payload * 200 -
                  action.payload * 200 * 0.16
                ).toFixed(2)
              ), // Total $
        dueToday:
          state.totalItems > 0
            ? Number(
                (
                  state.dueToday -
                  (action.payload * 200 + action.payload * 200 * 0.16) / 2
                ).toFixed(2)
              ) // 50% of total
            : 0,
        itemCount: "initCount",
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
        itemCount: "resetCount",
      };
    default:
      return state;
  }
};

export default RootReducer;
