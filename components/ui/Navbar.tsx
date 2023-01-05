import NextLink from "next/link"
import { Image, Spacer, Text, useTheme } from "@nextui-org/react"

export const Navbar = () =>
{
    const { theme } = useTheme()

    return (
        <div style={
        {
            display: 'flex',
            width: '100%',
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            padding: '0 20px',
            backgroundColor: theme?.colors.gray100.value
        }}>
            <Image 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png"
                alt="Icono de la aplicación"
                width={70}
                height={70}
            />

            <NextLink href="/" passHref>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Text color="white" h2>D</Text>
                    <Text color="white" h3>igimon</Text>
                </div>
            </NextLink>
            <Spacer css={{ flex: 1 }}/>

            <NextLink href="/favorites" passHref>
                <Text color="white">Favoritos</Text>
            </NextLink>
        </div>
    )
}
