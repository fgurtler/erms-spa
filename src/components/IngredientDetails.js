import React, { Component } from 'react';
import { Header, Segment, Table, Divider, Grid, Icon } from 'semantic-ui-react'

class IngredientDetails extends Component {
    render() {
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
                                    <Table.Cell>1100</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Ingredient</Table.Cell>
                                    <Table.Cell>NUTS COCONUT MEAT DRIED SWEETND SHREDDED</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Group</Table.Cell>
                                    <Table.Cell>1000 - Meats, Fish, Nuts, Beans & Dairy</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Subgroup</Table.Cell>
                                    <Table.Cell>19 - Nuts, Bakery & Sugar</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Temperature group</Table.Cell>
                                    <Table.Cell>Ambient</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Calories</Table.Cell>
                                    <Table.Cell>4560 per KG</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Unit of measure</Table.Cell>
                                    <Table.Cell>KG</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Non-recipe item?</Table.Cell>
                                    <Table.Cell>Yes</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Vegan Certificate Required?</Table.Cell>
                                    <Table.Cell>No</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Halal Certificate Required?</Table.Cell>
                                    <Table.Cell>No</Table.Cell>
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
                                <Table.Row>
                                    <Table.Cell>Milk</Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell textAlign='center'><Icon name="x" color="red" /></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Eggs</Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell textAlign='center'><Icon name="remove" color="red" /></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Peanuts</Table.Cell>
                                    <Table.Cell textAlign='center'><Icon name="check" color="grey"/></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Tree nuts</Table.Cell>
                                    <Table.Cell textAlign='center'><Icon name="check" color="grey"/></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Fish</Table.Cell>
                                    <Table.Cell textAlign='center'><Icon name="check" color="grey"/></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Shellfish</Table.Cell>
                                    <Table.Cell textAlign='center'><Icon name="check" color="grey"/></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Soy</Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell textAlign='center'><Icon name="warning sign" color="yellow"/></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Wheat</Table.Cell>
                                    <Table.Cell textAlign='center'><Icon name="check" color="grey"/></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Segment>

                </Grid.Column>
            </Grid>

        );
    }

}

export default IngredientDetails;