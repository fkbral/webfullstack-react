import { useCallback, useEffect, useRef, useState } from 'react';
import Layout from '../../components/Layout';
import Pokemon from '../../components/Pokemon';
import { loadPokemons } from '../../services/pokemonApi';
import { PokemonData } from '../../types/pokemon';
import {
  ListContainer,
  ListFooter,
  LoadMoreButton,
  SearchContainer,
} from './styles';

const limit = 40;

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [pokemonsList, setPokemonsList] = useState<PokemonData[]>([]);
  const [offset, setOffset] = useState(0);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchValueRef = useRef('');
  const countPokemons = useRef(0);
  const allPokemonsList = useRef<PokemonData[]>([]);

  const handleLoadModePokemons = useCallback(() => {
    setOffset((state) => state + limit);
  }, []);

  const handleSearchChange = useCallback((event: any) => {
    searchValueRef.current = event.target.value;
  }, []);

  const handleSearchClick = useCallback(() => {
    const filteredData = allPokemonsList.current.filter((x) =>
      x.name.includes(searchValueRef.current)
    );
    setPokemonsList(filteredData);
    setIsSearching(true);
  }, []);

  const handleClearSearch = useCallback(() => {
    searchValueRef.current = '';

    if (searchInputRef.current) {
      searchInputRef.current.value = '';
    }

    setPokemonsList([]);
    setIsSearching(false);
    setOffset(0);
  }, []);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await loadPokemons(offset, limit);

      // Carregando todos os Pokemons na PRIMEIRA chamada para fazer as busca
      if (countPokemons.current === 0) {
        countPokemons.current = data.count;
        loadPokemons(0, data.count).then((response) => {
          allPokemonsList.current = response.results;
        });
      }

      setPokemonsList((state) => [...state, ...data.results]);
      setLoading(false);
    }

    if (!isSearching) {
      loadData();
    }
  }, [offset, isSearching]);

  return (
    <Layout>
      <SearchContainer>
        <input
          ref={searchInputRef}
          type="text"
          onChange={handleSearchChange}
          placeholder="Digite o nome de um Pokemon..."
        />
        <button type="button" onClick={handleSearchClick}>
          Pesquisar
        </button>
        {isSearching && (
          <button type="button" onClick={handleClearSearch}>
            Limpar
          </button>
        )}
      </SearchContainer>
      <ListContainer>
        {pokemonsList.map((pokemon) => (
          <Pokemon key={pokemon.url} pokemon={pokemon} />
        ))}

        {loading ? (
          <strong>Carregando...</strong>
        ) : (
          !isSearching && (
            <ListFooter>
              <LoadMoreButton onClick={handleLoadModePokemons}>
                Carregar mais
              </LoadMoreButton>
            </ListFooter>
          )
        )}
      </ListContainer>
    </Layout>
  );
}
