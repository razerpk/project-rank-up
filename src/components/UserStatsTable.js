import React from 'react'
import { Table } from 'semantic-ui-react'
import { connect } from 'react-redux'

const UserStatsTable = (props) => {
  if (!props.userStats){
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
          {Object.entries(props.userStats).map((stat) => {
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

const mapStateToProps = (state) => {
  return {
    userStats: state.userStats,
  }
}

const ConnectedUserStatsTable = connect(
  mapStateToProps,
)(UserStatsTable)

export default ConnectedUserStatsTable