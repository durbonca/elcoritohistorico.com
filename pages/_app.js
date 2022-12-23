import Head from 'next/head'
import { NavBar, Footer } from '../components'
import { ContextProvider } from '../context/context'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>El Corito Historico</title>
        <meta
          name='description'
          content='El Corito Historico El podcast que soñaron nuestros padres fundadores, sobre la historia de Venezuela y
      Latino América'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ContextProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </ContextProvider>
    </>
  )
}

export default MyApp
