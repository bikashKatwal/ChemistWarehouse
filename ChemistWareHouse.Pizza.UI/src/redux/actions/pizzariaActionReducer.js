import { fetchGet, fetchPost } from "../../api";

const REQUEST_PIZZARIA_LOCATION = "REQUEST_PIZZARIA_LOCATION";
const RESPONSE_PIZZARIA_LOCATION = "RESPONSE_PIZZARIA_LOCATION";
const RESPONSE_PIZZA_MENU_BY_LOCATION = "RESPONSE_PIZZA_MENU_BY_LOCATION";
const RESPONSE_PIZZA_INGREDIENTS = "RESPONSE_PIZZA_INGREDIENTS";

export const actionCreators = {
    getLocations: () => async (dispatch) => {
        dispatch({ type: REQUEST_PIZZARIA_LOCATION });
        dispatch(actionCreators.getPizzariaLocation());
    },

    getAllIngredients: () => async (dispatch) => {
        const [, response] = await fetchGet("/Pizza/GetAllIngredients");
        dispatch({ type: RESPONSE_PIZZA_INGREDIENTS, payload: response });
    },


    getPizzariaLocation: () => async (dispatch) => {
        const [, response] = await fetchGet("/Pizza/GetLocations");
        dispatch({ type: RESPONSE_PIZZARIA_LOCATION, payload: response });
        dispatch(actionCreators.getPizzaMenuByLocation(response[0].locationId))
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

    updatePizza: (values) => async (dispatch) => {
        const [, response] = await fetchPost("/Pizza/UpdatePizza", {
            ...values
        });
        if (response.isSuccess) {
            dispatch(actionCreators.getPizzaMenuByLocation(values.locationId));
        }
    },

};

const initialValue = {
    locations: null,
    pizzaTypes: null,
    ingredients: null,
    isFetchingData: false,
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
        case RESPONSE_PIZZA_INGREDIENTS:
            return { ...state, ingredients: payload };
        default:
            return state;
    }
};
