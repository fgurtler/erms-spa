import {combineReducers} from 'redux'
import ingredients from './ingredientReducer'
import recipes from './recipeReducer'

const rootReducer = combineReducers({
    ingredients,
    recipes, 
});

export default rootReducer;