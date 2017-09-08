import React, { Component } from 'react';
import { Header, Segment, Table, Divider, Grid, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';

// this should be two components

class IngredientDetails extends Component {
    render() {
        const ingredient = this.props.ingredients.filter(i => i.unrs === this.props.match.params.id)[0];

        // make the allergens somewhat easier to deal with (watch the indices)
        let allAllergens = [
            { allergen: 'Milk', doesNotContain: true, mayContain: false, contains: false },
            { allergen: 'Eggs', doesNotContain: true, mayContain: false, contains: false },
            { allergen: 'Peanuts', doesNotContain: true, mayContain: false, contains: false },
            { allergen: 'Tree nuts', doesNotContain: true, mayContain: false, contains: false },
            { allergen: 'Fish', doesNotContain: true, mayContain: false, contains: false },
            { allergen: 'Shellfish', doesNotContain: true, mayContain: false, contains: false },
            { allergen: 'Soy', doesNotContain: true, mayContain: false, contains: false },
            { allergen: 'Wheat', doesNotContain: true, mayContain: false, contains: false },
        ];

        let { allergens } = ingredient;
        for (let entry in allergens) {
            let id = parseInt(allergens[entry].allergen, 10)
            if (allergens[entry].may_has === 'MAY') {
                allAllergens[id - 1].doesNotContain = false;
                allAllergens[id - 1].mayContain = true;
            }
            if (allergens[entry].may_has === 'HAS') {
                allAllergens[id - 1].doesNotContain = false;
                allAllergens[id - 1].contains = true;
            }
        }
        console.log(allAllergens);
        return (
            <Grid stackable columns={2}>
                <Grid.Column>
                    <Segment>
                        <Header as='h3'>Basic Information</Header>
                        <Divider />
                        <Table stackable>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>UNRS Code</Table.Cell>
                                    <Table.Cell>{ingredient.unrs}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Ingredient</Table.Cell>
                                    <Table.Cell>{ingredient.name}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Group</Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Subgroup</Table.Cell>
                                    <Table.Cell>{ingredient.unrs_group}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Temperature group</Table.Cell>
                                    <Table.Cell>{ingredient.temp_group}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Calories</Table.Cell>
                                    <Table.Cell>{ingredient.calories} per {ingredient.uom}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Unit of measure</Table.Cell>
                                    <Table.Cell>{ingredient.uom}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Non-recipe item?</Table.Cell>
                                    <Table.Cell>{(ingredient.non_recipe === 'X') ? 'Yes' : 'No'}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Vegan Certificate Required?</Table.Cell>
                                    <Table.Cell>{(ingredient.veg_doc === 'X') ? 'Yes' : 'No'}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Halal Certificate Required?</Table.Cell>
                                    <Table.Cell>{(ingredient.halal_doc === 'X') ? 'Yes' : 'No'}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment >
                        <Header as='h3'>Allergens</Header>
                        <Divider />
                        <Table definition size='small' celled={true} columns={4}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell />
                                    <Table.HeaderCell textAlign='center'>Does Not Contain</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>May Contain</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Contains</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {allAllergens.map(a => (
                                    <Table.Row key={a.allergen} >
                                        <Table.Cell>{a.allergen}</Table.Cell>
                                        <Table.Cell textAlign='center'><Icon name="check" color="grey" className={a.doesNotContain ? '' : 'hidden'}/></Table.Cell>
                                        <Table.Cell textAlign='center'><Icon name="warning sign" color="yellow" className={a.mayContain ? '' : 'hidden'} /></Table.Cell>
                                        <Table.Cell textAlign='center'><Icon name="x" color="red" className={a.contains ? '' : 'hidden'} /></Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </Segment>

                </Grid.Column>
            </Grid>

        );
    }

}

function mapStateToProps(state, ownProps) {
    return ({ ingredients: state.ingredients })
}

export default connect(mapStateToProps)(IngredientDetails);