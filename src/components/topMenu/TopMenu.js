import React from 'react'
import ResourcesList from '../resourcesList/ResourcesList'
import {
  AppBar,
  Button,
  Toolbar,
} from '@material-ui/core'
import './TopMenu.scss'


const TopMenu = ({ saveData, seconds }) => {

  return (
    <AppBar className='topmenu-appbar' position='relative'>
      <Toolbar>
        <b>
        Project Rank Up
        </b>
        <Button className='menu-right'
          onClick={() => saveData()}>
          Save
        </Button>
        <b>
          playtime {seconds} s
        </b>
      </Toolbar>
      <ResourcesList />
    </AppBar>
  )
}

export default TopMenu