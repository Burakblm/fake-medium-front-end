import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut() {
  return (
    <div>
        <Menu.Item>
            <Button primary>Sign in</Button>
            <Button primary style={{marginLeft:'0.5em'}}>Sign up</Button>
        </Menu.Item>
    </div>
  )
}
