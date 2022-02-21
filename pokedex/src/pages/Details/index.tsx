import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import api from '../../services/api';
import {
  Container,
  GoBack,
  Header,
  Info,
  LeftContainer,
  RightContainer,
  Row,
} from './styles';

const baseUrlImage =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
const frontShinyUrlImage =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/';
const typeBaseUrl = 'https://www.serebii.net/pokedex-bw/type/';

export default function Default() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<any>({});

  useEffect(() => {
    async function loadPokemon() {
      const { data } = await api.get(`pokemon/${id}`);

      setPokemon(data);
      setLoading(false);
    }

    loadPokemon();
  }, []);

  return (
    <Layout>
      <Header>
        <GoBack to="/">{'<'} Voltar</GoBack>
      </Header>
      <Container>
        {loading ? (
          <strong>Carregando...</strong>
        ) : (
          <>
            <LeftContainer>
              <img
                src={`${baseUrlImage}${id}.png`}
                alt=""
                width={250}
                height={250}
              />
              <img src={`${frontShinyUrlImage}${id}.png`} alt="" width={250} />
            </LeftContainer>
            <RightContainer>
              <Info>
                <label>Nome:</label>
                <span>{pokemon.name}</span>
              </Info>
              <Row>
                <Info>
                  <label>Peso:</label>
                  <span>{pokemon.weight}</span>
                </Info>
                <Info>
                  <label>Altura:</label>
                  <span>{pokemon.height}</span>
                </Info>
              </Row>
              <Info>
                <label>Tipo(s):</label>
                <div>
                  {pokemon.types.map((x) => (
                    <img src={`${typeBaseUrl}${x.type.name}.gif`} height={15} />
                  ))}
                </div>
              </Info>
              <Info>
                <label>Habilidades:</label>
                <span>
                  {pokemon.abilities.map((x) => x.ability.name).join(',')}
                </span>
              </Info>
              <Row>
                {pokemon.stats.map((stat) => (
                  <Info column>
                    <label>{stat.stat.name}</label>
                    <span>{stat.base_stat}</span>
                  </Info>
                ))}
              </Row>
            </RightContainer>
          </>
        )}
      </Container>
    </Layout>
  );
}
