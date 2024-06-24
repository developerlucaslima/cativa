import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

import styles from './styles.module.scss'

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 54 }} spin />} />
    </div>
  )
}

export default Loader
