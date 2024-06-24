import { SearchOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'

import { Agency } from '../../types/agency.type'
import styles from './styles.module.scss'

export const Search = ({
  data,
  setFiltered,
  placeholder,
}: {
  data: Agency[]
  setFiltered: (agencies: Agency[]) => void
  placeholder: string
}) => {
  const [searchData, setSearchData] = useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(event.target.value)
  }

  useEffect(() => {
    const filterAgencies = data?.filter((item: Agency) =>
      item.name.toLowerCase().includes(searchData.toLowerCase()),
    )
    setFiltered(filterAgencies)
  }, [searchData, data, setFiltered])

  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <SearchOutlined />
      </div>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={searchData}
        onChange={handleInputChange}
      />
    </div>
  )
}
