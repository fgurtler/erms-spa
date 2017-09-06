import React, { Component } from 'react';
import Breadcrumbs from './Breadcrumbs';

/* Throwaway code */
class SampleModule extends Component {
    render() {
        return (
            <Breadcrumbs pathname={this.props.location.pathname} />
        );
    }
}

export default SampleModule;