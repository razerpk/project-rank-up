import React from 'react'
import { Table } from 'semantic-ui-react'

const Missions = ({ missions }) => {
  if (!missions){
    return null
  }

  return (
    <div className='table-30-width'>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Available tasks</Table.HeaderCell>
            <Table.HeaderCell className='mission'></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {/*stat[0] is key, stat[1] is value*/}
          {Object.entries(missions).map((mission) => {
            return (
              <Table.Row key={mission[0]}>
                <Table.Cell>{mission[0]}</Table.Cell>
                <Table.Cell>{mission[1]} {mission[2]} {mission[3]}</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default Missions