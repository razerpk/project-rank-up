import React from 'react';
import { connect } from 'react-redux';
import './ResourcesList.scss';

const ResourcesList = ({ resources }) => {
  return (
    <div className='resources-content'>
      <div className='currency-item'>
        <div>gold {resources.gold.curVal}</div>
        <div>{resources.gold.perTick}/s</div>
      </div>
      <div className='currency-item'>
        <div>silver {resources.silver.curVal}</div>
        <div>{resources.silver.perTick}/s</div>
      </div>
      <div className='currency-item'>
        <div>elixir {resources.elixir.curVal}</div>
        <div>{resources.elixir.perTick}/s</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    resources: state.resources,
    userStats: state.userStats,
  };
};

const ConnectedResourcesList = connect(mapStateToProps)(ResourcesList);

export default ConnectedResourcesList;
