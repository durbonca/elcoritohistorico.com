import Link from 'next/link'
import Img from 'next/image'
import { breakText, wysiwygText, getPostDate } from '../../utils/functions'
import styles from './ArchivesPosts.module.scss'

export const ArchivePost = ({ post }) => {
  const { title, file, body, date_creation, category } = post
  return (
    <li className={styles.archivePost}>
      <div className={styles.thumbnailContainer}>
        <Link href={`/episodio/${title}`}>
          <Img className={styles.thumbnail} src={file.src} alt={file.title} />
        </Link>
      </div>
      <div className={styles.entryPreview}>
        <span className={styles.tagLine}>{getPostDate(date_creation)}</span>
        <span className={styles.category}>{category?.title}</span>
        <Link href={`/episodio/${title}`}>
          <h2 className={styles.title}>{title}</h2>
        </Link>
        <p className={styles.entry}>{breakText(wysiwygText(body), 50)}</p>
      </div>
    </li>
  )
}
