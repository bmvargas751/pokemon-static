import { Text, Grid, Card, Row } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { SmallPokemon } from '../../models';

export const PokemonCard = ( { id, name, img }: SmallPokemon ) =>
{
    const router = useRouter()

    const handleClick = () =>
    {
        router.push(`/name/${ name }`)
    }

    return (
        <Grid xs={6} sm={3} md={2} xl={1}>
            <Card isHoverable isPressable>
                <Card.Body css={{ p: 1 }}>
                    <Card.Image
                        src={ img || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg` }
                        width={ 100 }
                        height={ 140 }
                        onClick={ handleClick }
                    />
                </Card.Body>
                {
                    name && (
                        <Card.Footer>
                            <Row justify="space-between">
                                <Text transform='capitalize'>{ name }</Text>
                                <Text>{ id }</Text>
                            </Row>
                        </Card.Footer>
                    )
                }
            </Card>
        </Grid>
    )
}
