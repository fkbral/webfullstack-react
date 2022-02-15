import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import { Container, FormContainer } from './styles';
import { InputContainer } from '../../styles/common';

export default function Login() {
  const { setUserData } = useAuth();
  const navigate = useNavigate();

  const emailValueRef = useRef('');
  const passwordValueRef = useRef('');

  const [loading, setLoading] = useState(false);

  function handleSubmmit() {
    const emailIsValid =
      /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi.test(
        emailValueRef.current
      );

    if (!emailIsValid) {
      alert('E-mail inválido!');
      return;
    }

    setLoading(true);
    if (
      emailValueRef.current === 'teste@teste.com' &&
      passwordValueRef.current === '123456'
    ) {
      setTimeout(() => {
        const userData = {
          id: v4(),
          email: emailValueRef.current,
          name: 'Usuário teste',
        };

        setUserData(userData);
        navigate('/home');
      }, 5000);
      return;
    }

    alert('Usuário e/ou senha incorreto(s)!');
  }

  return (
    <Container>
      <FormContainer>
        <InputContainer>
          <label>E-mail</label>
          <input
            type="email"
            placeholder="Digite um e-mail..."
            onChange={(event) => {
              emailValueRef.current = event.target.value;
            }}
          />
        </InputContainer>
        <InputContainer>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite a senha..."
            onChange={(event) => {
              passwordValueRef.current = event.target.value;
            }}
          />
        </InputContainer>
        <Button loading={loading} onClick={handleSubmmit}>
          Entrar
        </Button>
      </FormContainer>
    </Container>
  );
}
