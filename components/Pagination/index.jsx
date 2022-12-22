import styles from './pagination.module.scss'
import Link from 'next/link'

export const Pagination = ({ page, totalPages, setPage, setPosts }) => {
  const handlePageChange = args => {
    window.scrollTo(0, 0)
    setPage(args)
    setPosts([])
  }

  return (
    <nav className={styles.container}>
      <div>
        {page !== 1 && (
          <>
            <Link className={styles.pageNav} onClick={() => handlePageChange(page - 1)}>
              Anterior
            </Link>
            {page > 2 && (
              <>
                <Link className={styles.pageNav} onClick={() => handlePageChange(1)}>{1}</Link>
                {' ... '}
              </>
            )}
            <Link className={styles.pageNav} onClick={() => handlePageChange(page - 1)}>
              {page - 1}
            </Link>
          </>
        )}
        <Link className={styles.pageNav} active>{page}</Link>
        {page < totalPages - 1 && (
          <>
            <Link className={styles.pageNav} onClick={() => handlePageChange(page + 1)}>
              {page + 1}
            </Link>
            {' ... '}
          </>
        )}
        {page !== totalPages && (
          <>
            <Link className={styles.pageNav} onClick={() => handlePageChange(totalPages)}>
              {totalPages}
            </Link>
            <Link className={styles.pageNav} onClick={() => handlePageChange(page + 1)}>
              Siguiente
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}
