let url_base = "https://pokeapi.co/api/v2/pokemon/";

const getPokemon = () => {
  return fetch(`${url_base}pokemon/ditto/`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
    });
};

const getProfileByUser = props => {
  return fetch(`${url_base}${props}`).then(res => res.json());
};

export { getPokemon, getProfileByUser };
