import * as actionTypes from '../actions/actionTypes'

const initialState = {
    ingredients: { sortColumn: 'unrs', sortDirection: 'ASC', filters: [] },
    recipes: { sortColumn: 'name', sortDirection: 'ASC', filters: [] }
}

export default function gridReducer(state = initialState, action) {
    switch (action.type) {

        case actionTypes.FILTER_INGREDIENTS_GRID: {
            let { ingredients } = state;
            ingredients = { ...ingredients, filters: action.filters }
            return { ...state, ingredients };
        }

        case actionTypes.SORT_INGREDIENTS_GRID: {

            let { ingredients } = state;
            ingredients = { ...ingredients, sortColumn: action.sortColumn, sortDirection: action.sortDirection }
            return { ...state, ingredients };
        }

        case actionTypes.FILTER_RECIPES_GRID: {
            let { recipes } = state;
            recipes = { ...recipes, filters: action.filters }
            return { ...state, recipes };
        }

        case actionTypes.SORT_RECIPES_GRID: {

            let { recipes } = state;
            recipes = { ...recipes, sortColumn: action.sortColumn, sortDirection: action.sortDirection }
            return { ...state, recipes };
        }

        default:
            return state;
    }
}