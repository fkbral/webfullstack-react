import { useRef, useState } from 'react';
import Menu from '../../components/Menu';
import Button from '../../components/Button';
import { useTheme } from '../../hooks/theme';

export default function Home() {
  const { theme, setDarkTheme, setLightTheme } = useTheme();
  // const { theme } = useContext(ThemeContext);
  const counterRef = useRef(0);
  const inputValueRef = useRef('');

  const [counter, setCounter] = useState(0);
  const [isTrue, setIsTrue] = useState(false);

  function quandoClicarFunction() {
    console.log('Sou uma função');
    // setCounter(counter + 1);
    setCounter((state) => state + 1);

    // setIsTrue(isTrue ? false : true);
    // setIsTrue(!isTrue);
    setIsTrue((state) => !state);

    counterRef.current++;
  }

  console.log('Renderizei!');
  console.log(counterRef.current);

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#000',
      }}
    >
      <Menu />
      <h1
        style={{
          color: theme === 'dark' ? '#fff' : '#000',
        }}
      >
        Home
      </h1>
      <span
        style={{
          color: theme === 'dark' ? '#fff' : '#000',
        }}
      >
        Tema escolhido: {theme}
      </span>
      <br />

      <Button
        onClick={() => {
          theme === 'light' ? setDarkTheme() : setLightTheme();
        }}
      >
        Alternar temas
      </Button>
      <br />
      <br />

      <p
        style={{
          color: theme === 'dark' ? '#fff' : '#000',
        }}
      >
        Contador: {counter}
      </p>
      <p
        style={{
          color: theme === 'dark' ? '#fff' : '#000',
        }}
      >
        Valor na ref: {counterRef.current}
      </p>
      <p
        style={{
          color: theme === 'dark' ? '#fff' : '#000',
        }}
      >
        IsTrue: {isTrue.toString()}
      </p>
      <Button
        style={{
          backgroundColor: '#f45',
        }}
        onClick={quandoClicarFunction}
      >
        Meu botão
      </Button>

      <br />
      <br />
      <input
        type="text"
        onChange={(event) => {
          // setInputValue(event.target.value);
          inputValueRef.current = event.target.value;
        }}
      />
      <p
        style={{
          color: theme === 'dark' ? '#fff' : '#000',
        }}
      >
        Valor digitado: {inputValueRef.current}
      </p>
    </div>
  );
}
