import React from 'react'
import { Menu } from 'semantic-ui-react'

const TopMenu = ({ saveData, seconds }) => {

  return (
    <Menu inverted>
      <Menu.Item
        name='Project Rank Up'
      />
      <Menu.Item className='menu-right'
        name='save'
        onClick={() => saveData()}
      />
      <Menu.Item>
      playtime {seconds} s
      </Menu.Item>
    </Menu>
  )
}

export default TopMenu