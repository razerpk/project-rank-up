import React from 'react';
import UserStatsTable from './../userStatsTable/UserStatsTable';
import { AppBar, Button, LinearProgress, Toolbar } from '@material-ui/core';
import './TopMenu.scss';

const TopMenu = ({ saveData, seconds, userStats }) => {
  return (
    <AppBar className='topmenu-appbar' position='relative'>
      <Toolbar>
        <b>Project Rank Up</b>
        <Button className='menu-right' onClick={() => saveData()}>
          Save
        </Button>
        <b>playtime {seconds} s</b>
      </Toolbar>
      <UserStatsTable />
      <div className='xp-div'>
        <LinearProgress
          className='xp-bar'
          variant='determinate'
          color='secondary'
          value={(userStats.xp / userStats.xpToLevel) * 100}
        />
        <label className='xp-text'>{`${userStats.xp}/${userStats.xpToLevel}`}</label>
      </div>
      <div className='stamina-div'>
        <LinearProgress
          className='stamina-bar'
          variant='determinate'
          color='primary'
          value={(userStats.stamina.value / userStats.stamina.max) * 100}
        />
        <label className='stamina-text'>{`${userStats.stamina.value}/${userStats.stamina.max}`}</label>
      </div>
    </AppBar>
  );
};

export default TopMenu;
