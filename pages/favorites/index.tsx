import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts"
import { FavoritesPokemon } from '../../components/favorites';
import { NoFavorites } from '../../components/ui';
import { getFavoritePokemons } from "../../utils";

export const Favorites = () =>
{
    const [ favoritePokemons, setFavoritePokemons ] = useState<number[]>([])

    useEffect(() =>
    {
        setFavoritePokemons( getFavoritePokemons() )

    }, [])
    

    return (
        <Layout title="Pokemons Favoritos">

            {
                favoritePokemons.length === 0
                ?
                    <NoFavorites />
                :
                    <FavoritesPokemon favoritePokemons={ favoritePokemons } />
            }

        </Layout>
    )
}

export default Favorites