import { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Context } from '../../context/context'
import { getPostDate, extractYoutubeVideoId } from '../../utils/functions'
import styles from './post.module.scss'
import { Button } from '../../components'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'

export default function Episodios () {
  const router = useRouter()
  const { id } = router.query
  const { getPostByID } = useContext(Context)
  const [post, setPost] = useState({})

  const handleQuery = async () => {
    if (!id) return
    const response = await getPostByID(id)
    response.urlYoutube = `https://youtube.com/embed/${extractYoutubeVideoId(
      response?.url_youtube
    )}`
    setPost(response)
  }

  useEffect(() => {
    handleQuery()
  }, [id])

  return (
    <div className=' p-4 max-w-5xl mx-auto min-h-screen'>
      <Button
        title='Volver atras'
        onClick={() => router.back()}
        LeftIcon={<ArrowUturnLeftIcon className='w-6' />}
      />
      <div className={styles.entryContent}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className='flex gap-4'>
          <span className={styles.date}>
            {post.date_creation && getPostDate(post?.date_creation)}
          </span>
          <span className={styles.category}>{post?.category?.title}</span>
        </div>
        <h2 className={styles.subTitle}>Ve el video en youtube:</h2>
        <figure className={styles.multimedia}>
          <iframe
            className={styles.iframeVideo}
            height={422}
            width={750}
            src={post.urlYoutube}
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          />
        </figure>

        <h2 className={styles.subTitle}>Descarga directamente el episodio:</h2>
        <figure className={styles.multimedia}>
          <audio className={styles.audioPlayer} controls src={post?.url_download} />
        </figure>
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{
            __html: post?.body
          }}
        />
      </div>
    </div>
  )
}
