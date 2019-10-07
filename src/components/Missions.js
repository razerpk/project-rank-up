import React from 'react'
import { Table } from 'semantic-ui-react'
import { connect } from 'react-redux'

const Missions = (props) => {
  if (!props.missions){
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
          {Object.entries(props.missions).map((mission) => {
            return (
              <Table.Row key={mission[0]}>
                <Table.Cell>{mission[0]}</Table.Cell>
                <Table.Cell>{mission[1].stamCost}</Table.Cell>
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
    missions: state.missions,
  }
}

const ConnectedMissions = connect(
  mapStateToProps,
)(Missions)

export default ConnectedMissions