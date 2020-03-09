import React from 'react';
import { connect } from 'react-redux';
import { spendUnusedAttributePoint } from '../../reducers/userStatsReducer';
import { updateMissionRewards } from '../../reducers/missionsReducer';
import { Button } from '@material-ui/core';
import './UserStatsTable.scss';

const UserStatsTable = ({
  userStats,
  spendUnusedAttributePoint,
  updateMissionRewards,
}) => {
  if (!userStats) {
    return null;
  }

  const handleAttributeChange = statName => {
    if (userStats.unusedAttrPoins === 0) {
      console.log('not enough unused attribute points');
      return;
    }
    spendUnusedAttributePoint(statName);
    updateMissionRewards(statName);
  };

  const showAddStatBtn = () => {
    if (userStats.unusedAttrPoints < 1) {
      return 'none';
    }
    return 'inline-block';
  };
  const statList = () => {
    let statList = [];
    for (const key in userStats.attributes) {
      let stat = userStats.attributes[key];

      statList.push(
        <div className='stat-row' key={key}>
          <div className='stat-name'>{`${key}:`}</div>
          <div className='stat-value'>
            {stat.value}
            <Button
              style={{ display: showAddStatBtn() }}
              onClick={() => handleAttributeChange(key)}
            >
              +
            </Button>
          </div>
        </div>
      );
    }
    return statList;
  };

  return (
    <div>
      <div className='statlist'>{statList()}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userStats: state.userStats,
  };
};

const mapDispatchToProps = {
  spendUnusedAttributePoint,
  updateMissionRewards,
};
const ConnectedUserStatsTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserStatsTable);

export default ConnectedUserStatsTable;
