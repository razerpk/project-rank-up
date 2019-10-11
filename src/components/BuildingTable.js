import React from 'react'
import { Button, Table } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateBuildings, updateBuildingCosts } from '../reducers/buildingsReducer'
import { updateResourceValue } from '../reducers/resourcesReducer'

const BuildingTable = (props) => {

  if (!props.buildings || !props.resources){
    return null
  }

  const handlePurchase = (buildingName) => {

    const building = { ...props.buildings[buildingName] }
    // example cost for level 10 building:
    // 100 * 1.15^10
    const cost = buildingCost(building)

    if (props.resources.gold.curVal < cost.gold) {
      console.log('not enough gold')
      return
    }

    const updatedBuilding = { ...building, level: building.level + 1 }
    props.updateBuildingCosts(props.buildings, updatedBuilding, [buildingName], cost)
    props.updateResourceValue(props.resources, cost)
  }

  // params: building properties
  // returns: current cost of the building
  const buildingCost = (building) => {
    let cost = {}
    for (let [key, value] of Object.entries(building.cost)) {
      cost = {
        ...cost,
        [key]: Math.round(value * building.costMulti[key])
      }
    }
    return cost
  }

  const showCost = (building) => {
    const cost = buildingCost(building)
    return (
      Object.entries(cost).map((resource) => {
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
    for (let [key, value] of Object.entries(building.cost)) {
      if (building.cost[key] < props.resources[key].curVal){
        return '#98FB98'
      }
    }
    return '#CA3433'
  }

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
          {/* building[0] is building name, building[1] contains one of the buildings properties*/}
          {Object.entries(props.buildings).map((building) => {
            return (
              <Table.Row key={building[0]}>
                <Table.Cell>{building[0]}</Table.Cell>
                <Table.Cell>
                  <Button style={{ backgroundColor: buttonColor(building[1]) }}
                    onClick={() => handlePurchase(building[0])}>Buy</Button>
                  <div>cost:
                    {showCost(building[1])}
                  </div>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    resources: state.resources,
    buildings: state.buildings,
  }
}
const mapDispatchToProps = {
  updateResourceValue,
  updateBuildings,
  updateBuildingCosts,
}

const ConnectedBuildingTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(BuildingTable)

export default ConnectedBuildingTable