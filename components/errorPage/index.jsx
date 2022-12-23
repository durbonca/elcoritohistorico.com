import { NavBar } from '../NavBar'

export const ErrorPage = () => {
  return (
    <>
      <NavBar />
      <div className='flex flex-col items-center justify-evenly min-h-screen'>
        <h1 className='text-9xl'>error 404</h1>
        <p className='text-xl'>
          Oye panal, La pagina que estas buscando parece que no anda por aca
        </p>
      </div>
    </>
  )
}
