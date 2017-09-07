import * as actionTypes from '../actions/actionTypes'

export function sortIngredientsGrid(sortColumn, sortDirection){
    return {type: actionTypes.SORT_INGREDIENTS_GRID, sortColumn, sortDirection};
}
export function filterIngredientsGrid(filters){
    return {type: actionTypes.FILTER_INGREDIENTS_GRID, filters};
}