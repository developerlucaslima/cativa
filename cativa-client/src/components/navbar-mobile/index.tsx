import { MenuOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { NavbarItems } from '../../config/navbarItems'
import styles from './styles.module.scss'

export const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const items = NavbarItems()

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>Logo</div>

      <div
        className={styles.menuIcon}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <MenuOutlined />
      </div>

      {isOpen && (
        <ul className={styles.menuContainer}>
          {items.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              style={{ textDecoration: 'none' }}
              target={item.target}
            >
              <li className={styles.menuItem} onClick={() => setIsOpen(false)}>
                {item.text}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  )
}
