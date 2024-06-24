import { useState } from 'react'

import { ListAgencies } from '../../../components/list-agencies'
import { Navbar } from '../../../components/navbar'
import { NavbarMobile } from '../../../components/navbar-mobile'
import { Search } from '../../../components/search'
import { useGetAgencies } from '../../../hooks/useGetAgencies'
import { Agency } from '../../../types/agency.type'
import styles from './style.module.scss'

export const Agencies = () => {
  const { data } = useGetAgencies()
  const [filtered, setFiltered] = useState<Agency[]>([])

  return (
    <>
      <Navbar />
      <NavbarMobile />
      <div className={styles.wrapper}>
        <div>
          <Search
            data={data}
            setFiltered={setFiltered}
            placeholder="Pesquisar por nome..."
          />
        </div>
        <div className={styles.tableContainer}>
          <ListAgencies data={data} filtered={filtered} />
        </div>
      </div>
    </>
  )
}
