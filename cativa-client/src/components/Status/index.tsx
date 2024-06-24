import { Tooltip } from 'antd'

import styles from './styles.module.scss'

export const Status = ({ color, title }: { color: string; title: string }) => {
  const inline = { backgroundColor: color }

  return (
    <Tooltip title={title} placement="top">
      <div className={styles.statusContainer}>
        <div className={styles.status} style={inline} />
      </div>
    </Tooltip>
  )
}
