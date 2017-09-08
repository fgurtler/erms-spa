import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs';
import RecipesGrid from './recipeGrid'
import RecipesDetails from './recipeDetails'
import { Button, Grid } from 'semantic-ui-react';

class Recipes extends Component {
    render() {
        return (
            <div>
                <div>
                    <Grid>
                        <Grid.Column width={8} verticalAlign='middle'>
                            <Breadcrumbs pathname={this.props.location.pathname} />
                        </Grid.Column>
                        <Grid.Column textAlign='right' width={8}>
                            <Button compact >
                                Add Recipe
                         </Button>
                        </Grid.Column>
                    </Grid>

                </div>


                <Route path="/recipes/:id" component={RecipesDetails} />
                <Route path="/recipes" exact component={RecipesGrid} />

                <div>
                    <ul>
                        <li>Conditional Rendering for Mission -> Units</li>
                        <li>Not doing ingredient search; or do smart search?</li>
                    </ul>
                </div>


            </div>
        );
    }

}

export default Recipes;