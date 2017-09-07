import * as actionTypes from '../actions/actionTypes'

export default function recipeReducer(state = [], action){
    switch (action.type){
        case actionTypes.CREATE_RECIPE:
            return state;
        default:
            return state;
    }
}