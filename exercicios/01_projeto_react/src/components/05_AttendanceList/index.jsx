import React from 'react'
import { v4 as uuid } from 'uuid'
import './styles.css'

export class AttendanceList extends React.Component {
  constructor() {
    super()
    this.state = { studentName: '', studentsList: [] }
  }

  render() {
    const handleAddStudentNameToStudentList = event => {
      event.preventDefault()
      if (this.state.studentName.length < 2) {
        return
      }

      this.setState({
        studentName: '',
        studentsList: [...this.state.studentsList, this.state.studentName],
      })

      // melhor prática
      // this.setState((previousState) => ({
      //   studentName: '',
      //   studentsList: [...previousState.studentsList, previousState.studentName],
      // }))
    }

    return (
      <div>
        <form action="" onSubmit={handleAddStudentNameToStudentList}>
          <label htmlFor="name">Adicionar nome de aluno à lista:</label>
          <input
            id="name"
            type="search"
            onChange={event =>
              this.setState({
                studentName: event.target.value,
              })
            }
            value={this.state.studentName}
          />
          <button type="submit">adicionar</button>
        </form>

        <ol className="students-list">
          {this.state.studentsList.map(student => (
            <li key={uuid()}>{student}</li>
          ))}
        </ol>
      </div>
    )
  }
}
