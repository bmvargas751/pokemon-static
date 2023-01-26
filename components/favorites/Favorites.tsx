import { Grid } from "@nextui-org/react";
import { PokemonCard } from "../../components/pokemon";

interface Props {
    favoritePokemons: number[]
}

export const FavoritesPokemon = ({ favoritePokemons }: Props) =>
{
    return (
        <Grid.Container gap={2} direction="row" justify="flex-start">
            {
                favoritePokemons.map( id =>
                (
                    <PokemonCard key={ id } id={ id } />
                ))
            }
        </Grid.Container>
    )
}
