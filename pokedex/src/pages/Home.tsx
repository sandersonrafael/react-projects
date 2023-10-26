import { Container, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import PokemonCard from '../components/PokemonCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const filterPokemons = (text: string) => {
    if (text) {
      return setFilteredPokemons(() => {
        return pokemons.filter(({ name }: { name: string }) => {
          return name.toLowerCase().indexOf(text.toLowerCase()) !== -1;
        });
      });
    }

    return setFilteredPokemons([...pokemons]);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
      const pokemonList = data.data.results;
      setPokemons(pokemonList);
      setFilteredPokemons(pokemonList);
    };
    getData();
  }, []);

  return (
    <div>
      <Navbar searchPokemon={filterPokemons} />
      <Container maxWidth={false}>
        <Grid container >
          {filteredPokemons.map(({ name, url }) => (
            <Grid key={name} item xs={12} sm={6} md={4} lg={2}>
              <PokemonCard name={name} url={url} />
            </Grid>
          ))}

        </Grid>

      </Container>
    </div>
  );
};

export default Home;
