import React from 'react'
import { Button, Table } from 'semantic-ui-react'

const BuildingTable = ({ buildings, setResourses, resources, setBuildings }) => {

  const event = null

  const handlePurchase = (e, cost, building) => {
    e = e || window.event
    e.preventDefault()


    if (resources.gold < cost) {
      console.log('not enough gold')
      return
    }

    const updatedBuilding = { ...buildings[building],  level: buildings[building].level + 1 }
    setBuildings({ ...buildings,  [building]: { ...updatedBuilding } })
    setResourses({ ...resources, gold: resources.gold - cost })
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
          {Object.entries(buildings).map((building) => {
            return (
              <Table.Row key={building[0]}>
                <Table.Cell>{building[0]}</Table.Cell>
                <Table.Cell>
                  <Button positive onClick={() => handlePurchase(event, 100, building[0])}>Buy</Button>
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

export default BuildingTable