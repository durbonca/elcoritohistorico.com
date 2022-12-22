import Link from 'next/link'
import styles from './Footer.module.scss'

export const Footer = () => (
  <footer className={styles.container}>
    <div className={styles.section}>
      <p className={styles.copyright}>
        Copyright © {new Date().getFullYear()} El Corito Histórico. Todos los
        derechos reservados.{' '}
      </p>
      <span>
        Web desarrollada por{' '}
        <Link
          className={styles.link}
          title='Web de desarrollador Durbonca'
          href='https://durbonca.com'
          target='_blank'
          rel='External designer noreferrer'
        >
          https://durbonca.com
        </Link>
      </span>
    </div>
  </footer>
)
