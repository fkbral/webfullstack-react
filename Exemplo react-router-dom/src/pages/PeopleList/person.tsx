import React from 'react';
import './personStyles.css';

export default function Person({ person, onDelete }) {
  function handleDelete() {
    onDelete(person.id);
  }

  return (
    <div className="person-container">
      <div className="person-infos-container">
        <div className="info">
          <label>Nome:</label>
          <p>{person.name}</p>
        </div>
        <div className="info">
          <label>Cpf:</label>
          <p>{person.cpf}</p>
        </div>
        <div className="info">
          <label>Idade:</label>
          <p>{person.age}</p>
        </div>
      </div>
      <div className="menu-container">
        <button onClick={handleDelete}>Excluir</button>
      </div>
    </div>
  );
}
