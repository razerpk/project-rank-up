import React from 'react'
import { Button, Table } from 'semantic-ui-react'

const BuildingTable = ({ buildingCost, buildingLevels, setRecourses, resources, setBuildingLevels }) => {

  const event = null

  const handlePurchase = (e, cost, buildingName) => {
    e = e || window.event
    e.preventDefault()

    setRecourses({ ...resources, gold: resources.gold - cost })
    if(buildingName === 'building1')
      setBuildingLevels({ ...buildingLevels, building1: buildingLevels.building1 + 1 })
    if(buildingName === 'building2')
      setBuildingLevels({ ...buildingLevels, building2: buildingLevels.building2 + 1 })
    if(buildingName === 'building3')
      setBuildingLevels({ ...buildingLevels, building3: buildingLevels.building3 + 1 })
    if(buildingName === 'building4')
      setBuildingLevels({ ...buildingLevels, building4: buildingLevels.building4 + 1 })
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
          <Table.Row>
            <Table.Cell>Building 1</Table.Cell>
            <Table.Cell>
              <Button positive onClick={() => handlePurchase(event, buildingCost(buildingLevels.building1), 'building1')}>Buy</Button>
              <div>cost: {buildingCost(buildingLevels.building1)}</div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Building 2</Table.Cell>
            <Table.Cell>
              <Button positive onClick={() => handlePurchase(event, buildingCost(buildingLevels.building2), 'building2')}>Buy</Button>
              <div>cost: {buildingCost(buildingLevels.building2)}</div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Building 3</Table.Cell>
            <Table.Cell>
              <Button positive onClick={() => handlePurchase(event, buildingCost(buildingLevels.building3), 'building3')}>Buy</Button>
              <div>cost: {buildingCost(buildingLevels.building3)}</div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Building 4</Table.Cell>
            <Table.Cell>
              <Button positive onClick={() => handlePurchase(event, buildingCost(buildingLevels.building4), 'building4')}>Buy</Button>
              <div>cost: {buildingCost(buildingLevels.building4)}</div>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

export default BuildingTable