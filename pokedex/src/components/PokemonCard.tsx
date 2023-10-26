import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';

const PokemonCard = ({ name, url }: { name: string, url: string }) => {
  const [imgUrl, setImgUrl] = useState<string>('');
  const [type, setType] = useState<string>(' ');

  useEffect(() => {
    const getPokemonData = async () => {
      const pokemonData = await axios.get(url);
      setImgUrl(pokemonData.data.sprites.front_default);
      setType(pokemonData.data.types[0].type.name);
    };
    getPokemonData();
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={imgUrl}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name[0].toUpperCase() + name.slice(1)}
        </Typography>

        <Typography gutterBottom variant="h6" component="div">
          {type[0].toUpperCase() + type.slice(1)}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};

export default PokemonCard;
