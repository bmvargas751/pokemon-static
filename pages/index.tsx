import { NextPage, GetStaticProps } from 'next'
import { Grid } from '@nextui-org/react';

import { pokeApi } from '../api';
import { Layout } from '../components/layouts';

import { PokemonCard } from '../components/pokemon';
import { PokemonListResponse, SmallPokemon } from '../models';

interface Props
{
    pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) =>
{
    return (
        <Layout title='Listado de digimons'>

            <Grid.Container gap={2} justify="flex-start">
                { pokemons.map(( poke: SmallPokemon ) =>
                (
                    <PokemonCard key={ poke.id } {...poke} />
                ))}
            </Grid.Container>

        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ( context ) =>
{
    const { data } = await pokeApi.get<PokemonListResponse>('pokemon?limit=151')

    const pokemons: SmallPokemon[] = data.results.map( pokemon =>
    {
        const idPokemon = pokemon.url!.split('/')[6]
        const imgPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ idPokemon }.png`

        return {
            ...pokemon,
            id: idPokemon,
            img: imgPokemon
        }
    })

    return {
        props: {
            pokemons
        }
    }
}

export default HomePage