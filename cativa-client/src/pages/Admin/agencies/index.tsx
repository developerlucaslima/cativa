import { useState } from 'react'

import { Navbar } from '../../../components/Navbar'
import { NavbarMobile } from '../../../components/NavbarMobile'
import { Search } from '../../../components/Search'
import { TableAgencies } from '../../../components/TableAgencies'
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
            placeholder="Procurar..."
          />
        </div>
        <div className={styles.tableContainer}>
          <TableAgencies data={data} filtered={filtered} />
        </div>
      </div>
    </>
  )
}
