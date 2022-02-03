import { useRef, useState } from 'react';
import Menu from '../../components/Menu';
import Button from '../../components/Button';

export default function Home() {
  const aux = useRef(10);
  const [counter, setCounter] = useState(0);
  const [isTrue, setIsTrue] = useState(false);

  function quandoClicarFunction() {
    console.log('Sou uma função');
    // setCounter(counter + 1);
    setCounter((state) => state + 1);

    // setIsTrue(isTrue ? false : true);
    // setIsTrue(!isTrue);
    setIsTrue((state) => !state);

    aux.current++;
  }

  console.log('Renderizei!');
  console.log(aux.current);

  return (
    <div>
      <Menu />
      <h1>Home</h1>

      <p>Contador: {counter}</p>
      <p>IsTrue: {isTrue.toString()}</p>
      <Button
        style={{
          backgroundColor: '#f45',
        }}
        onClick={quandoClicarFunction}
      >
        Meu botão
      </Button>
    </div>
  );
}
