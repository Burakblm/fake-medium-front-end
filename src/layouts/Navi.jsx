import React from 'react'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {
    return (
        <div>
            <Menu>
                
                    <Menu.Item
                        name='home' />
                    <Menu.Item name='message' />
                    <Menu.Menu position='right'>
                        <SignedOut />
                        <SignedIn />
                    </Menu.Menu>
            
            </Menu>
        </div>
    )
}
