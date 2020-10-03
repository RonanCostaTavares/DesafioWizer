
const BASE_API = 'https://pokeapi.co/api/v2/';


export default {

    getPokemons: async () => {
        const req = await fetch(`${BASE_API}/pokemon/?offset=20&limit=80`);
        const json = await req.json();

        return json;
    },

    getPokemonByName: async (name) => {
        const req = await fetch(`${BASE_API}/pokemon/${name}`);
        const json = await req.json();


        return json;
    },

    getPokemonByUrl: async (url) => {

        const req = await fetch(`${url}`);
        const json = await req.json();


        return json;

    },

}