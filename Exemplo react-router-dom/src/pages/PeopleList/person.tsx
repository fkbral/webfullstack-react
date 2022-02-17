import React from 'react';
import { PersonInfos } from '.';
import {
  PersonContainer,
  Infos,
  PersonInfosContainer,
  MenuContainer,
  RedButton,
} from './personStyles';

type PersonProps = {
  person: PersonInfos;
  onDelete: (id: string) => void;
};
export default function Person({ person, onDelete }: PersonProps) {
  function handleDelete() {
    onDelete(person.id);
  }

  return (
    <PersonContainer>
      <PersonInfosContainer>
        <Infos>
          <label>Nome:</label>
          <p>{person.name}</p>
        </Infos>
        <Infos>
          <label>Cpf:</label>
          <p>{person.cpf}</p>
        </Infos>
        <Infos>
          <label>Idade:</label>
          <p>{person.age}</p>
        </Infos>
      </PersonInfosContainer>
      <MenuContainer>
        <RedButton onClick={handleDelete}>Excluir</RedButton>
      </MenuContainer>
    </PersonContainer>
  );
}
