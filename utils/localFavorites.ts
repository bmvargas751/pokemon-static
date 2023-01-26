
export const toogleFavorites = ( id: number ) =>
{
    if( typeof window === undefined ) return false

    let favorites: number[] = JSON.parse(localStorage.getItem('favoritesPokemon') || '[]')

    if( favorites.includes(id) )
    {
        favorites = favorites.filter( pokeId => pokeId !== id )
    }
    else
    {
        favorites.push( id )
    }

    localStorage.setItem('favoritesPokemon', JSON.stringify( favorites ))
}

export const existInFavorites = ( id: number ): boolean =>
{
    if( typeof window === undefined ) return false

    let favorites: number[] = JSON.parse(localStorage.getItem('favoritesPokemon') || '[]')
    return favorites.includes( id )
}

export const getFavoritePokemons = (): number[] =>
{
    return JSON.parse(localStorage.getItem('favoritesPokemon') || '[]')
}