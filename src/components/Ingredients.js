import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import IngredientGrid from './IngredientGrid'
import IngredientDetails from './IngredientDetails'

/* Throwaway code */
class Ingredients extends Component {
    render() {
        return (
            <div>
                <Breadcrumbs pathname={this.props.location.pathname}/>
                <div>&nbsp;</div>
                <Route path="/ingredients/:id" component={IngredientDetails} />
                <Route path="/ingredients" exact component={IngredientGrid} />
            </div>
        );
    }

}

export default Ingredients;