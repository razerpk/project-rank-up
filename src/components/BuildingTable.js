import React from 'react'
import { Button, Table } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateBuildings } from '../reducers/buildingsReducer'
import { updateResources } from '../reducers/resourcesReducer'

const BuildingTable = (props) => {

  if (!props.buildings || !props.resources){
    return null
  }

  const handlePurchase = (buildingName) => {

    const building = { ...props.buildings[buildingName] }
    // example cost for level 10 building:
    // 100 * 1.15^10
    const cost = buildingCost(building)
    if (props.resources.gold < cost) {
      console.log('not enough gold')
      return
    }

    const updatedBuilding = { ...building,  level: building.level + 1 }
    const updatedBuildings = { ...props.buildings, [buildingName]: updatedBuilding }

    props.updateBuildings(updatedBuildings)
    props.updateResources({ ...props.resources, gold: props.resources.gold - cost })
  }

  // params: building properties
  // returns: current cost of the building
  const buildingCost = (building) => {
    return Math.round(building.initCost * Math.pow(building.costMulti, building.level))
  }

  //returns: green if can afford the building
  //         red if cant afford the building
  const buttonColor = (building) =>
    buildingCost(building) < props.resources.gold
      ? '#98FB98'
      : '#CA3433'

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
                  <div>cost: {buildingCost(building[1])}</div>
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
  updateResources,
  updateBuildings
}

const ConnectedBuildingTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(BuildingTable)

export default ConnectedBuildingTable