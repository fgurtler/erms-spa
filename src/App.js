import React from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'
import AppBar from './components/AppBar'
import LandingPage from './components/LandingPage'
import SampleModule from './components/SampleModule'
import './App.css';

class App extends React.Component {
    render() {
        return (
            <Grid container >
                <Grid.Row>
                    <Grid.Column>
                        <AppBar />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Route path="/ingredients" component={SampleModule} />
                        <Route path="/recipes" component={SampleModule} />
                        <Route path="/menuPlans" component={SampleModule} />
                        <Route path="/deliveries" component={SampleModule} />
                        <Route path="/documents/search" component={SampleModule} />
                        <Route path="/documents/upload" component={SampleModule} />
                        <Route path="/" exact component={LandingPage} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default App;
