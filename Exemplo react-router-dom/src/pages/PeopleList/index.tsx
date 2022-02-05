import React, { useRef, useState } from 'react';
import { v4 } from 'uuid';
import Menu from '../../components/Menu';
import Person from './person';
import './styles.css';

export interface PersonInfos {
  id: string;
  name: string;
  cpf: string;
  age: string;
}

export default function PeopleList() {
  const nameValueRef = useRef('');
  const cpfValueRef = useRef('');
  const ageValueRef = useRef('');

  const [people, setPeople] = useState<PersonInfos[]>([]);

  function handleOnChangeName(event: any) {
    nameValueRef.current = event.target.value;
  }

  const handleOnChangeCpf = (event: any) => {
    cpfValueRef.current = event.target.value;
  };

  function handleSubmmit() {
    setPeople((state) => [
      ...state,
      {
        id: v4(),
        name: nameValueRef.current,
        cpf: cpfValueRef.current,
        age: ageValueRef.current,
      },
    ]);

    // setPeople([
    //   ...people,
    //   {
    //     name: nameValueRef.current,
    //     cpf: cpfValueRef.current,
    //     age: ageValueRef.current,
    //   },
    // ]);
  }

  function handleDelete(id: string) {
    setPeople((state) => state.filter((x) => x.id !== id));
  }

  console.log(people);

  return (
    <>
      <Menu />
      <div className="container">
        <div className="form-container">
          <input
            type="text"
            placeholder="Digite um nome"
            onChange={handleOnChangeName}
          />
          <input
            type="text"
            placeholder="Digite um cpf"
            onChange={handleOnChangeCpf}
          />
          <input
            type="text"
            placeholder="Digite a idade"
            onChange={(event) => {
              ageValueRef.current = event.target.value;
            }}
          />
          <button onClick={handleSubmmit}>Enviar</button>
        </div>
        <div className="people-list-container">
          {people.map((person) => (
            <Person key={person.id} person={person} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </>
  );
}
