import { fetchGet, fetchPost } from "../../api";

const REQUEST_PIZZARIA_LOCATION = "REQUEST_PIZZARIA_LOCATION";
const RESPONSE_PIZZARIA_LOCATION = "RESPONSE_PIZZARIA_LOCATION";
const REQUEST_PIZZA_MENU_BY_LOCATION = "REQUEST_PIZZA_MENU_BY_LOCATION";
const RESPONSE_PIZZA_MENU_BY_LOCATION = "RESPONSE_PIZZA_MENU_BY_LOCATION";

export const actionCreators = {
    getLocations: () => async (dispatch) => {
        dispatch({ type: REQUEST_PIZZARIA_LOCATION });
        dispatch(actionCreators.getPizzariaLocation());
    },

    getPizzariaLocation: () => async (dispatch) => {
        const [, response] = await fetchGet("/Pizza/GetLocations");
        dispatch({ type: RESPONSE_PIZZARIA_LOCATION, payload: response });
    },

    createLocation: (values) => async (dispatch) => {
        const [, response] = await fetchPost("/Pizza/CreatePizzaria", {
            ...values
        });
        if (response.isSuccess) {
            dispatch(actionCreators.getPizzariaLocation());
        }
    },

    getPizzaMenuByLocation: (id) => async (dispatch) => {
        const [, response] = await fetchGet(`/Pizza/GetPizzaMenuById/${id}`);
        dispatch({ type: RESPONSE_PIZZA_MENU_BY_LOCATION, payload: response });
    },
};

const initialValue = {
    locations: null,
    pizzaTypes: null,
    isFetchingData: false
};

export const PizzariaReducer = (
    state = initialValue,
    { type, payload }
) => {
    switch (type) {
        case REQUEST_PIZZARIA_LOCATION:
            return { ...state, isFetchingData: true };
        case RESPONSE_PIZZARIA_LOCATION:
            return { ...state, isFetchingData: false, locations: payload };
        case RESPONSE_PIZZA_MENU_BY_LOCATION:
            return { ...state, isFetchingData: false, pizzaTypes: payload };
        default:
            return state;
    }
};
