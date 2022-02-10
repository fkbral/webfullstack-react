import { useRef } from 'react';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import './styles.css';

export default function Login() {
  const { user, setUserData } = useAuth();
  const emailValueRef = useRef('');
  const passwordValueRef = useRef('');

  function handlerSubmmit() {
    if (
      emailValueRef.current === 'teste@teste.com' &&
      passwordValueRef.current === '123456'
    ) {
      setUserData({
        email: emailValueRef.current,
        name: 'Usuário teste',
      });
      return;
    }

    alert('Usuário e/ou senha incorreto(s)!');
  }

  return (
    <div className="container">
      <div className="form-container">
        <div className="input-container">
          <label>E-mail</label>
          <input
            type="email"
            placeholder="Digite um e-mail..."
            onChange={(event) => {
              emailValueRef.current = event.target.value;
            }}
          />
        </div>
        <div className="input-container">
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite a senha..."
            onChange={(event) => {
              passwordValueRef.current = event.target.value;
            }}
          />
        </div>
        <Button onClick={handlerSubmmit}>Entrar</Button>
      </div>
    </div>
  );
}
