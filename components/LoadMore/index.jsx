import { useContext, useState } from 'react'
import { Context } from '../../context/context'
import { Button } from '../Button'

export const LoadMore = () => {
  const { fetchMore } = useContext(Context)
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    await fetchMore()
    setLoading(false)
  }

  return (
    <div className='flex justify-center'>
      <Button title='Cargar más episodios' onClick={handleClick} disabled={loading} loading={loading} />
    </div>
  )
}
