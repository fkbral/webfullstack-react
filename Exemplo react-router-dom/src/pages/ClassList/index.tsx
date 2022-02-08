import { useRef, useState } from 'react';
import { v4 } from 'uuid';
import Menu from '../../components/Menu';
import Button from '../../components/Button';
import './styles.css';

interface Student {
  id: string;
  name: string;
}

export default function ClassList() {
  const [students, setStudents] = useState<Student[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const inputValueRef = useRef('');

  function handleInputOnChange(event) {
    inputValueRef.current = event.target.value;
  }

  function handleButtonClick() {
    const name = inputValueRef.current;
    setStudents((state) => [
      ...state,
      {
        id: v4(),
        name: name,
      },
    ]);

    inputValueRef.current = '';

    // Não causa renderização
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }

  return (
    <>
      <Menu />
      <div className="container">
        <div className="form-container">
          <input
            ref={inputRef}
            type="text"
            placeholder="Digite o nome do aluno..."
            onChange={handleInputOnChange}
          />
          <Button onClick={handleButtonClick}>Enviar</Button>
        </div>
        <div className="list-container">
          {students.map((student, index) => (
            <div key={student.id}>{`${index + 1}) ${student.name}`}</div>
          ))}
        </div>
      </div>
    </>
  );
}
