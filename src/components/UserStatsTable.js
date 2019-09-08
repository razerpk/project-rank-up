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
          <Table.Row>
            <Table.Cell>Agi</Table.Cell>
            <Table.Cell>{userStats.agi}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Int</Table.Cell>
            <Table.Cell>{userStats.int}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Str</Table.Cell>
            <Table.Cell>{userStats.str}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Max stamina</Table.Cell>
            <Table.Cell>{userStats.stamina}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>xp</Table.Cell>
            <Table.Cell>{userStats.xp}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

export default UserStatsTable