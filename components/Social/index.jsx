import { Logo } from './Logo'
import youtube from '../../public/icons/youtube.svg'
import applepodcast from '../../public/icons/applePodcast.svg'
import spotify from '../../public/icons/spotify.svg'
import googlePodcasts from '../../public/icons/googlePodcasts.svg'
import ivoox from '../../public/icons/ivoox.svg'
import instagram from '../../public/icons/instagram.svg'

export const Social = () => {
  return (
    <div className='my-2 mx-auto max-w-5xl'>
      <p className='font-bold text-xl'>Nuestras redes sociales</p>
      <div className='flex mt-2 gap-2 items-center flex-wrap justify-around'>
        <Logo
          href='https://www.youtube.com/playlist?list=PL7PXhJ4RTsJkEkP_7PELkueVASdKOs7Er'
          logo={youtube}
          alt='youtube logo'
        />
        <Logo
          className='p-2'
          href='https://podcasts.apple.com/ve/podcast/el-corito-hist%C3%B3rico/id1488276528'
          logo={applepodcast}
          alt='apple podcast logo'
        />
        <Logo
          className='p-2'
          href='https://open.spotify.com/show/6k40kfAeqUsVuAhWuHF9aK'
          logo={spotify}
          alt='spotify logo'
        />
        <Logo
          className='p-2'
          href='https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy9lMWRlODI4L3BvZGNhc3QvcnNz'
          logo={googlePodcasts}
          alt='Google Podcast logo'
        />
        <Logo
          href='https://cl.ivoox.com/es/podcast-corito-historico_sq_f1764935_1.html'
          logo={ivoox}
          alt='Ivoox logo'
        />
        <Logo
          className='p-2'
          href='https://www.instagram.com/elcoritohistorico_/'
          logo={instagram}
          alt='Instagram logo'
        />
      </div>
    </div>
  )
}
