import { useRef, useState } from 'react';
import Menu from '../../components/Menu';
import Button from '../../components/Button';
import { useTheme } from '../../hooks/theme';
import { useLocation } from 'react-router-dom';
import { useQueryParams } from '../../utils/useQueryParams';
import Layout from '../../components/Layout';
import { Title } from '../../styles/common';
import { RedButton, SelectedThemeText, Text } from './styles';

export default function Home() {
  // Para obter parâmetros
  // const location = useLocation();
  // const queryParams = useQueryParams();

  // console.log(queryParams.get('typeQueryParams'));
  // console.log(location);

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
    <Layout>
      <Title>Home</Title>
      <SelectedThemeText>Tema escolhido: {theme}</SelectedThemeText>
      <Button
        onClick={() => {
          theme === 'light' ? setDarkTheme() : setLightTheme();
        }}
      >
        Alternar temas
      </Button>
      <Text>Contador: {counter}</Text>
      <Text>Valor na ref: {counterRef.current}</Text>
      <Text>IsTrue: {isTrue.toString()}</Text>
      <RedButton onClick={quandoClicarFunction}>Meu botão</RedButton>

      <br />
      <br />
      <input
        type="text"
        onChange={(event) => {
          // setInputValue(event.target.value);
          inputValueRef.current = event.target.value;
        }}
      />
      <Text>Valor digitado: {inputValueRef.current}</Text>
    </Layout>
  );
}
