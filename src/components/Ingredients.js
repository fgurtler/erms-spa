import React, { Component } from 'react';
import Breadcrumbs from './Breadcrumbs';

/* Throwaway code */
class Ingredients extends Component {
    render() {
        return (
            <div>
                <Breadcrumbs pathname={this.props.location.pathname}/>
            </div>
        );
    }

}

export default Ingredients;