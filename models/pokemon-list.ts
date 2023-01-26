export interface PokemonListResponse
{
    count:    number;
    next?:     string;
    previous?: string;
    results:  SmallPokemon[];
}

export interface SmallPokemon
{
    id: string|number;
    img?: string;
    name?: string;
    url?:  string;

}

type pokeId = {

}