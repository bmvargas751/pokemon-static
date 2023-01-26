import Head from "next/head"
import { LayoutProps } from "../../models"
import { Navbar } from '../ui';

const origin = ( typeof window === 'undefined' ? '' : window.location.origin )

export const Layout = ({ children, title, name }: LayoutProps) =>
{
    return (
        <>
            <Head>
                <title>{ title || 'Pokemon App' }</title>
                <meta name="author" content="Bryan Montesino"/>
                <meta name="description" content={`Información sobre el pokemon ${ name }`}/>
                <meta name="keywords" content={`${ name }, pokemon, pokedex`}/>

                <meta property="og:title" content={`Información sobre el pokemon ${ name }`} />
                <meta property="og:description" content={`Esta es la página sobre ${ name }`} />
                <meta property="og:image" content={`${ origin }/assets/banner.png`} />
            </Head>

            <Navbar />

            <main style={{ padding: '0px 20px' }}>
                { children }
            </main>
        </>
    )
}
