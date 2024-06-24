import { Link } from 'react-router-dom'

import { NavbarItems } from '../../config/navbarItems'
import styles from './styles.module.scss'

export const Navbar = () => {
  const items = NavbarItems()

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div style={{ marginTop: '-rem' }}>Logo</div>

        <div className={styles.menu}>
          {items.map((item) => (
            <Link
              to={item.link}
              target={item.target}
              className={styles.noUnderline}
              key={item.id}
            >
              <li>{item.text}</li>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
