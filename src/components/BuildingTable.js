import React from 'react'
import { Grid, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateBuildings, updateBuildingCosts } from '../reducers/buildingsReducer'
import { updateResourceValueAndPerTick } from '../reducers/resourcesReducer'

const BuildingTable = (props) => {

  if (!props.buildings || !props.resources){
    return null
  }

  const handlePurchase = (buildingName) => {
    const building = { ...props.buildings[buildingName] }
    const cost = building.cost

    // Check if player can afford the building
    for (let [key] of Object.entries(cost)) {
      if (props.resources[key].curVal < cost[key]){
        console.log(`not enough ${key}`)
        return
      }
    }

    const updatedBuilding = { ...building, level: building.level + 1 }
    props.updateResourceValueAndPerTick(props.resources, cost, building.produce)
    props.updateBuildingCosts(props.buildings, updatedBuilding, [buildingName], cost)
  }

  const showCost = (building) => {
    return (
      Object.entries(building.cost).map((resource) => {
        return (
          <div key={resource[0]}>
            {resource[0]}: {resource[1]}
          </div>
        )
      })
    )
  }

  //returns: green if can afford the building
  //         red if cant afford the building
  const buttonColor = (building) => {
    for (let [key] of Object.entries(building.cost)) {
      if (building.cost[key] > props.resources[key].curVal){
        return '#CA3433' //red
      }
    }
    return '#98FB98' //green
  }

  /* building[0] is building name, building[1] contains one of the buildings properties*/
  const buildingRows =
    Object.entries(props.buildings).map((building) => {
      return (
        <Grid.Row key={building[0]}>
          <Grid.Column mobile={8} tablet={6} computer={6}>
            <div><b>{building[0]}</b></div>
            <div >
              <div>{Math.round((building[1].produce.gold.baseValue * building[1].level)* 10) / 10} gold/s</div>
              <div>level {building[1].level}</div>
            </div>
            <div>
              <div>{Math.round((building[1].produce.gold.baseValue * (building[1].level+1))* 10) / 10} gold/s</div>
              <div>level {building[1].level + 1}</div>
            </div>
          </Grid.Column>
          <Grid.Column mobile={8} tablet={10} computer={10}>
            <Button style={{ background: buttonColor(building[1]) }}
              onClick={() => handlePurchase(building[0])}>Buy</Button>
            <div>cost:
              {showCost(building[1])}
            </div>
          </Grid.Column>
        </Grid.Row>
      )
    })

  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column><b>Buildings</b></Grid.Column>
      </Grid.Row>

      {buildingRows}
    </Grid>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    seconds: ownProps.seconds,
    resources: state.resources,
    buildings: state.buildings,
  }
}
const mapDispatchToProps = {
  updateResourceValueAndPerTick,
  updateBuildings,
  updateBuildingCosts,
}

const ConnectedBuildingTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(BuildingTable)

export default ConnectedBuildingTable