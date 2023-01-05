import Head from "next/head"
import { LayoutProps } from "../../models"
import { Navbar } from '../ui';

export const Layout = ({ children, title, name }: LayoutProps) =>
{
    return (
        <>
            <Head>
                <title>{ title || 'Pokemon App' }</title>
                <meta name="author" content="Bryan Montesino"/>
                <meta name="description" content={`Información sobre el pokemon ${ name }`}/>
                <meta name="keywords" content={`${ name }, pokemon, pokedex`}/>
            </Head>

            <Navbar />

            <main style={{ padding: '0px 20px' }}>
                { children }
            </main>
        </>
    )
}
