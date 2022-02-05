import { useEffect, useState } from 'react';
import Menu from '../../components/Menu';

// `https://api.github.com/users/${userName}`
// `https://api.github.com/users/${userName}/repos`
export default function GithubProfile() {
  const [loading, setLoading] = useState(true);

  // Semelhante com componentDidMount. Ocorre somente quando o componente é exibido em tela
  useEffect(() => {
    async function getUserProfile(userName) {
      const response = await fetch(`https://api.github.com/users/${userName}`, {
        method: 'get',
      });
      const user = await response.json();
      console.log(user);
      setLoading(false);
    }

    console.log('componentDidMount');
    getUserProfile('DaviGn');

    // Semelhante com componentWillUnMount
    return () => {
      console.log('Desmontagem');
    };
  }, []);

  // Semelhante com componentDidUpdate
  // É disparado quando carrega a página e quando há uma alteração no estado loading
  useEffect(() => {
    console.log('Carregou');
  }, [loading]);

  // É disparado sempre que o componente renderiza
  useEffect(() => {
    console.log('Apareço sempre que há uma renderização');
  });

  return (
    <>
      <Menu />
      <div />
    </>
  );
}
