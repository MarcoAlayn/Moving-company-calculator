export const INCREMENT_VALUES = "INCREMENT_VALUES";
export const DECREMENT_VALUES = "DECREMENT_VALUES";
export const RESET_VALUES = "RESET_VALUES";

export const incrementValues = (value) => {
  return (dispatch) => {
    return dispatch({
      type: INCREMENT_VALUES,
      payload: value,
    });
  };
};

export const decrementValues = (value) => {
  return (dispatch) => {
    return dispatch({
      type: DECREMENT_VALUES,
      payload: value,
    });
  };
};

export const resetValues = () => {
  return (dispatch) => {
    return dispatch({
      type: RESET_VALUES,
    });
  };
};
