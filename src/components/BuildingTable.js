import React from 'react'
import { Button, Table } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateBuildings } from '../reducers/buildingsReducer'
import { updateResources } from '../reducers/resourcesReducer'

const BuildingTable = (props) => {

  if (!props.buildings || !props.resources){
    return null
  }
  const event = null

  const handlePurchase = (e, building) => {
    e = e || window.event
    e.preventDefault()

    // example cost: 100 * 1.15^10
    const cost = building[1].initCost * Math.pow(building[1].costMulti, building[1].level)
    if (props.resources.gold < cost) {
      console.log('not enough gold')
      return
    }

    const updatedBuilding = { ...building,  level: building[1].level + 1 }

    const updatedBuildings = Object.assign({}, Object.entries(props.buildings).map((building) => {
      return building[0] !== updatedBuilding[0] ? Object.assign({}, building) : updatedBuilding
    }))

    props.updateBuildings(updatedBuildings)
    props.updateResources({ ...props.resources, gold: props.resources.gold - cost })
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
          {Object.entries(props.buildings).map((building) => {
            return (
              <Table.Row key={building[0]}>
                <Table.Cell>{building[0]}</Table.Cell>
                <Table.Cell>
                  <Button positive onClick={() => handlePurchase(event, building)}>Buy</Button>
                  <div>cost: {/*TODO*/}</div>
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