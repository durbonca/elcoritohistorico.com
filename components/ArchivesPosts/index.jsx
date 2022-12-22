import { ArchivePost } from './ArchivePost'
import styles from './ArchivesPosts.module.scss'
/* import { Pagination } from "../"; */

export const ArchivesPosts = ({
  posts
  /* page,
  totalPages,
  setPage,
  setPosts */
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
      {/* <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
        setPosts={setPosts}
      /> */}
    </div>
  )
}
