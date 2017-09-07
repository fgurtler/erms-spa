import * as actionTypes from '../actions/actionTypes'

export function createRecipe(recipe){
    return {type: actionTypes.CREATE_RECIPE, recipe};
}