
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const actionCreators = {
    getIncrement: () => (dispatch) => {
        dispatch({ type: INCREMENT });
    },
    getDecrement: () => (dispatch) => {
        dispatch({ type: DECREMENT });
    },
};

// export const { getIncrement, getDecrement } = actionCreators;

const initialValue = {
    counterValue: 0,
};

export const CounterReducer = (
    state = initialValue,
    { type, payload }
) => {
    switch (type) {
        case INCREMENT:
            return { ...state, counterValue: state.counterValue + 1 };
        case DECREMENT:
            return { ...state, counterValue: state.counterValue - 1 };
        default:
            return state;
    }
};
