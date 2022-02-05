import { useEffect, useRef, useState } from 'react';
import Menu from '../../components/Menu';
import './styles.css';

interface UserProfileProps {
  name: string;
  bio: string;
  followers: number;
  following: number;
}

interface RepositoryProps {
  id: number;
  name: string;
}

// `https://api.github.com/users/${userName}`
// `https://api.github.com/users/${userName}/repos`
export default function GithubProfile() {
  const [username, setUsername] = useState('');
  const [loadingUserProfile, setLoadingUserProfile] = useState(true);
  const [userProfile, setUserProfile] = useState<UserProfileProps>();
  const [loadingRepositories, setLoadingRepositories] = useState(true);
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);

  const usernameValueRef = useRef('');

  // Semelhante com componentDidMount.
  // Ocorre somente quando o componente é exibido em tela
  useEffect(() => {
    if (!username) return;

    async function getUserProfile(userName: string) {
      setLoadingUserProfile(true);
      const response = await fetch(`https://api.github.com/users/${userName}`, {
        method: 'get',
      });
      const user = await response.json();
      setLoadingUserProfile(false);
      setUserProfile(user);
    }

    async function getUserRepositories(userName: string) {
      setLoadingRepositories(true);
      const response = await fetch(
        `https://api.github.com/users/${userName}/repos`
      );
      const userRepositories = await response.json();
      setLoadingRepositories(false);
      setRepositories(userRepositories);
    }

    getUserProfile(username);
    getUserRepositories(username);

    // Semelhante com componentWillUnMount
    return () => {
      console.log('Desmontagem');
    };
  }, [username]);

  // Semelhante com componentDidUpdate
  // É disparado quando carrega a página e quando há uma alteração no estado loading
  // useEffect(() => {
  //   console.log('Carregou');
  // }, [loading]);

  // É disparado sempre que o componente renderiza
  // useEffect(() => {
  //   console.log('Apareço sempre que há uma renderização');
  // });

  return (
    <>
      <Menu />
      <div className="input-container">
        <input
          type="text"
          placeholder="Digite um usuário"
          onChange={(event) => {
            usernameValueRef.current = event.target.value;
          }}
        />
        <button
          onClick={() => {
            setUsername(usernameValueRef.current);
          }}
        >
          Enviar
        </button>
      </div>
      <h1>Github Profile</h1>
      {loadingUserProfile ? (
        <h3>Carregando perfil...</h3>
      ) : (
        <div className="github-profile-infos-container">
          <div className="github-profile-info">
            <label>Nome: </label>
            <p>{userProfile?.name}</p>
          </div>
          <div className="github-profile-info">
            <label>Followers: </label>
            <p>{userProfile?.followers}</p>
          </div>
          <div className="github-profile-info">
            <label>Following: </label>
            <p>{userProfile?.following}</p>
          </div>
          <div className="github-profile-info">
            <label>Bio: </label>
            <p>{userProfile?.bio}</p>
          </div>
        </div>
      )}
      <h2>Repositórios</h2>
      {loadingRepositories ? (
        <h3>Carregando repositórios...</h3>
      ) : (
        <div className="github-repositories-container">
          <ul>
            {repositories.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
