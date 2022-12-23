import { useContext, useState } from 'react'
import { Context } from '../../context/context'
import { ArrowPathIcon } from '@heroicons/react/24/outline'

export const LoadMore = () => {
  const { fetchMore } = useContext(Context)
  const [loading, setLoading] = useState(false)

  return (
    <div className='flex justify-center'>
      <button
        className='flex items-center gap-4 btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg'
        disabled={loading}
        onClick={async () => {
          setLoading(true)
          await fetchMore()
          setLoading(false)
        }}
      >Cargar más episodios {loading && <ArrowPathIcon className='animate-spin w-6' />}
      </button>
    </div>
  )
}
