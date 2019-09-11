import React from 'react'
import { Table } from 'semantic-ui-react'

const UserStatsTable = ({ userStats }) => {
  if (!userStats){
    return null
  }

  return (
    <div className='table-30-width'>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Stats</Table.HeaderCell>
            <Table.HeaderCell className='building-table-right-header'></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {/*stat[0] is key, stat[1] is value*/}
          {Object.entries(userStats).map((stat) => {
            return (
              <Table.Row key={stat[0]}>
                <Table.Cell>{stat[0]}</Table.Cell>
                <Table.Cell>{stat[1]}</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default UserStatsTable