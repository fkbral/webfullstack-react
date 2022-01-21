import React from "react";


// 1. a tela deve conter um input que receberá o nome da pessoa digitado pelo usuário. Armazene o valor digitado em um estado;
// 2. a tela também deverá ter um botão para adicionar o nome da pessoa em uma lista de presença;
// 3. logo abaixo deverá ser exibida a lista dos nomes das pessoas presentes com o seguinte formato: 
    
//     1) John Doe
    
//     2) Fulano da Silva


export class AttendanceList extends React.Component {
  constructor() {
    super()
    this.state = { studentName: '', studentsList: [] }
  }
  
  render() {
    const handleAddStudentNameToStudentList = (event) => {
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

    return(
    <div>
      <form action="" onSubmit={handleAddStudentNameToStudentList}>
        <label htmlFor="name">Adicionar nome de aluno à lista:</label>
        <input 
          id="name"
          type="search" 
          onChange={(event) => this.setState({
            studentName: event.target.value
          })}
          value={this.state.studentName}
        />
        <button type="submit">adicionar</button>
      </form>

      {this.state.studentsList.map(student => <p>{student}</p>)}
    </div>
  )}
}