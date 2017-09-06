import React, { Component } from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import {Link} from 'react-router-dom'

/* Throwaway code */
class SampleModule extends Component {
    render() {
        let moduleName = this.cleanPath(this.props.match.path)
        return (
            <div>
                <Breadcrumb size='large'>
                    <Breadcrumb.Section><Link to='/'>Home</Link></Breadcrumb.Section>
                    <Breadcrumb.Divider icon='right angle' />
                    <Breadcrumb.Section active>{moduleName}</Breadcrumb.Section>
                </Breadcrumb>
            </div>
        );
    }

    cleanPath(path){
        let moduleName = path.substr(1)
        return moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
    }

}

export default SampleModule;