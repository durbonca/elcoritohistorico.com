import { useContext, useState } from 'react'
import { Context } from '../../context/context'
import { Button } from '../Button'

export const LoadMore = () => {
  const { fetchMore, isInLastPage } = useContext(Context)
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    await fetchMore()
    setLoading(false)
  }

  return (
    <div className='flex justify-center'>
      {!isInLastPage
        ? <Button title='Cargar más episodios' onClick={handleClick} disabled={loading || isInLastPage} loading={loading} />
        : <Button title='Parece que ya te vacilaste todos los episodios pana :(' disabled={isInLastPage} />}
    </div>
  )
}
