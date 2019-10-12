import React from 'react'
import { Button, Table } from 'semantic-ui-react'
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
    props.updateBuildingCosts(props.buildings, updatedBuilding, [buildingName], cost)
    props.updateResourceValueAndPerTick(props.resources, cost, building.produce)
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
      if (building.cost[key] < props.resources[key].curVal){
        return '#98FB98'
      }
    }
    return '#CA3433'
  }

  /* building[0] is building name, building[1] contains one of the buildings properties*/
  const buildingRows =
    Object.entries(props.buildings).map((building) => {
      return (
        <Table.Row key={building[0]}>
          <Table.Cell>{building[0]}</Table.Cell>
          <Table.Cell>
            <Button style={{ background: buttonColor(building[1]) }}
              onClick={() => handlePurchase(building[0])}>Buy</Button>
            <div>cost:
              {showCost(building[1])}
            </div>
          </Table.Cell>
        </Table.Row>
      )
    })

  return (
    <div className='table-30-width'>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Buildings</Table.HeaderCell>
            <Table.HeaderCell className='building-table-right-header'></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {buildingRows}
        </Table.Body>
      </Table>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    interval: ownProps.interval,
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