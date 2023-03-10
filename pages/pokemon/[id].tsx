import { useState, useEffect } from 'react';

import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react"

import confetti from 'canvas-confetti'

import { Layout } from "../../components/layouts"
import { Pokemon } from "../../models"
import { existInFavorites, getPokemonInfo, toogleFavorites } from "../../utils"

interface Props {
    pokemon: Pokemon
}

export const PokemonPage: NextPage<Props> = ({ pokemon }) =>
{
    const { id, name, sprites } = pokemon
    const [ isInFavorites, setIsInFavorites ] = useState(false)

    useEffect(() =>
    {
        setIsInFavorites( existInFavorites( id ))

    }, [])
    

    const onToogleFavorite = () =>
    {
        toogleFavorites( id )
        setIsInFavorites( !isInFavorites )

        if( isInFavorites ) return

        confetti(
        {
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: { x: 1, y: 0 }
        })
    }
    

    return (
        <Layout title={ `Info de ${ name.toUpperCase() }` } name={ name }>
            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4}>

                    <Card isHoverable css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={ sprites.other?.dream_world.front_default! }
                                alt={ name }
                                width={ 100 }
                                height={ 200 }
                            />
                        </Card.Body>
                    </Card>

                </Grid>
                <Grid xs={12} sm={4}>

                    <Card>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text h1 transform="capitalize">{ name }</Text>
                            <Button
                                color="gradient"
                                ghost={ !isInFavorites }
                                onPress={ onToogleFavorite }
                            > { isInFavorites ? 'Eliminar de favoritos' : 'Guardar en favoritos' }</Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container display="flex" direction="row" gap={0}>
                                <Image
                                    src={ sprites.front_default! }
                                    alt={ name }
                                    width={ 100 }
                                    height={ 100 }
                                />
                                <Image
                                    src={ sprites.back_default! }
                                    alt={ name }
                                    width={ 100 }
                                    height={ 100 }
                                />
                                <Image
                                    src={ sprites.front_shiny! }
                                    alt={ name }
                                    width={ 100 }
                                    height={ 100 }
                                />
                                <Image
                                    src={ sprites.back_shiny! }
                                    alt={ name }
                                    width={ 100 }
                                    height={ 100 }
                                />
                            </Container>
                        </Card.Body>
                    </Card>

                </Grid>
            </Grid.Container>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) =>
{
    const allPokemons = [...Array(151)].map((value, index) => `${ index + 1 }`)

    return {
        paths: allPokemons.map( id =>
        ({
            params: { id }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) =>
{
    const { id } = params as { id: string }
    console.log(id)

    return {
        props: {
            pokemon: await getPokemonInfo( id )
        }
    }
}

export default PokemonPage