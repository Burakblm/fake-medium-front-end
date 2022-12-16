import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn() {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://media.licdn.com/dms/image/C4E03AQGTasZUWJDZ9A/profile-displayphoto-shrink_400_400/0/1634329903112?e=1676505600&v=beta&t=Eok6rEoinJw1n13w9me-GKbvmB7_W5V4Nh4Ezt9lnj0"/>
            <Dropdown pointing="top left" text="Burak">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item text="Çıkış Yap" icon="info"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
