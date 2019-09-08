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
          {userStats.map(stat => {
            return (
              <Table.Row key={stat.attribute}>
                <Table.Cell>{stat.attribute}</Table.Cell>
                <Table.Cell>{stat.value}</Table.Cell>
              </Table.Row>
            )
          })}

        </Table.Body>
      </Table>
    </div>
  )
}

export default UserStatsTable