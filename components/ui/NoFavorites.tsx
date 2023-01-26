import { Container, Image, Text } from "@nextui-org/react"

export const NoFavorites = () => 
{
    return (
        <Container css={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "calc(100vh - 100px)" }}>
            <Text h1>No hay favoritos</Text>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/802.png"
                width={250}
                height={250}
            />
        </Container>
    )
}
