import React, { Component } from 'react';
import { Menu, Popup, List, Image, Icon } from 'semantic-ui-react'

const HelpMenuItem = (
    <Menu.Item name='help'> <Icon name='help' size='large'/></Menu.Item>
)
const HelpMenuContents = (
    <List>
        <List.Item>Documentation</List.Item>
        <List.Item>Manual</List.Item>
        <List.Item>Quick Reference Guides</List.Item>        
        <List.Item>Online Training</List.Item>
    </List>
)

class AppBar extends Component {
    render() {
        return (
            <Menu borderless id="AppBar">
                <Menu.Item><Image src="logo.png"/><span id="brand">RATIONS</span></Menu.Item>
                <Menu.Menu position='right'>
                    <Popup trigger={HelpMenuItem} content={HelpMenuContents} on='click' position='bottom right' />
                </Menu.Menu>
            </Menu>
        );
    }
}

export default AppBar;