import React, { Component } from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import NavigationMenu from './NavigationMenu'

class LandingPage extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <NavigationMenu />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Header as='h3' attached='top'>
                            Recipes
                        </Header>
                        <Segment attached color='blue' raised>
                            To revise, in draft, etc
                        </Segment>
                        <Header as='h3' attached='top'>
                            Menu Plans
                        </Header>
                        <Segment attached color='blue' raised>
                            Period 7 due on 9/11/2017
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default LandingPage;