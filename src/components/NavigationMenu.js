import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NavigationMenu extends Component {

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        
        return (
            <Menu vertical color='blue' >
                
                <Menu.Item 
                    name='ingredients'
                    as={Link} to="/ingredients"
                    active={activeItem === 'ingredients'}
                    onClick={this.handleItemClick}>
                    Ingredients
                </Menu.Item>
                
                <Menu.Item 
                    name='recipes'
                    as={Link} to="/recipes" 
                    active={activeItem === 'recipes'}
                    onClick={this.handleItemClick}>               
                    Recipes
                </Menu.Item>
                
                <Menu.Item
                    name='menuPlans'
                    as={Link} to="/menuPlans" 
                    active={activeItem === 'menuPlans'}
                    onClick={this.handleItemClick}>               
                    Menu Plans
                </Menu.Item>
                
                <Menu.Item 
                    name='deliveries'
                    as={Link} to="/deliveries"
                    active={activeItem === 'deliveries'}
                    onClick={this.handleItemClick}>     
                    Deliveries
                </Menu.Item>

                <Menu.Item name='Documents'>Documents
                    <Menu.Menu>
                        <Menu.Item 
                            name='search'
                            as={Link} to="/documents/search"
                            active={activeItem === 'search'}
                            onClick={this.handleItemClick}>                               
                            Search
                        </Menu.Item>

                        <Menu.Item 
                            name='upload'
                            as={Link} to="/documents/upload"
                            active={activeItem === 'upload'}
                            onClick={this.handleItemClick}>                               
                            Upload
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        );
    }
}

export default NavigationMenu;