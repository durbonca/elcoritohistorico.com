import { ArchivePost } from './ArchivePost'
import styles from './ArchivesPosts.module.scss'

export const ArchivesPosts = ({
  posts
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.archivesTitle}>
        <span>Entradas recientes</span>
      </p>
      <ul className={styles.listArchivesPosts}>
        {posts.map(post => (
          <ArchivePost key={post.id} post={post} />
        ))}
      </ul>
    </div>
  )
}
