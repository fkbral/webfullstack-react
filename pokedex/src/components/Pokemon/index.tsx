import { PokemonData } from '../../types/pokemon';
import { Container } from './styles';

interface PokemonProps {
  pokemon: PokemonData;
}

const baseUrlImage =
  'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/';

function getPokemonId(url: string): string {
  return url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
}

export default function Pokemon({ pokemon }: PokemonProps) {
  const id = getPokemonId(pokemon.url);

  return (
    <Container>
      <img src={`${baseUrlImage}${id}.svg`} alt="" width={200} height={150} />
      <span>{pokemon.name}</span>
    </Container>
  );
}
