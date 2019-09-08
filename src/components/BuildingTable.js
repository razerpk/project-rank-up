import React from 'react'
import { Button, Table } from 'semantic-ui-react'

const BuildingTable = ({ buildingCost, buildings, setResourses, resources, setBuildings }) => {

  const event = null

  const handlePurchase = (e, cost, buildingName) => {
    e = e || window.event
    e.preventDefault()


    let updateResource = resources.find(resource => resource.type === 'gold')

    if (updateResource.value < cost) {
      console.log('not enough gold')
      return
    }
    updateResource = { ...updateResource, value: updateResource.value - cost }
    setResourses(resources.map(resource => resource.type === updateResource.type ? updateResource : resource))

    let updateBuilding = buildings.find(building => building.name === buildingName)
    updateBuilding = { ...updateBuilding, level: updateBuilding.level+1 }
    setBuildings(buildings.map(building => building.name === updateBuilding.name ? updateBuilding : building))
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
          {buildings.map(building => {
            return (
              <Table.Row key={building.name}>
                <Table.Cell>{building.name}</Table.Cell>
                <Table.Cell>
                  <Button positive onClick={() => handlePurchase(event, buildingCost(building.level), building.name)}>Buy</Button>
                  <div>cost: {buildingCost(building.level)}</div>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default BuildingTable