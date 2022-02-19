import { PokemonData } from '../types/pokemon';
import api from './api';

interface PokeapiResponsedata {
  count: number;
  results: PokemonData[];
}

export async function loadPokemons(offset: number, limit: number) {
  const { data } = await api.get<PokeapiResponsedata>(
    `pokemon?offset=${offset}&limit=${limit}`
  );
  return data;
}
