import {combineReducers} from 'redux'
import ingredients from './ingredientReducer'
import recipes from './recipeReducer'
import grids from './gridReducer'

const rootReducer = combineReducers({
    ingredients,
    recipes, 
    grids,
});

export default rootReducer;