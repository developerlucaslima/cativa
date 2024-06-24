import { QuestionCircleOutlined } from '@ant-design/icons'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Popconfirm, Space } from 'antd'

import { deleteIcon, editIcon } from '../../config/icons'
import { api } from '../../services/api'
import { Agency } from '../../types/agency.type'
import { notify } from '../Toast'
import styles from './styles.module.scss'

export const TableAgencies = ({ data, filtered }: any) => {
  const queryClient = useQueryClient()
  const headers = ['name', 'email', 'phone', 'website']

  const mutation = useMutation({
    mutationFn: (id) => {
      return api.delete(`/agencies/${id}`)
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`agencies`] })
      notify({ type: 'success', message: 'Agência excluída com sucesso!' })
    },
    onError() {
      notify({ type: 'error', message: 'Falha ao excluir agência!' })
    },
  })

  return (
    <table className={styles.wrapper}>
      <thead>
        <tr>
          {headers.map((header: string, index: number) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {(filtered || data)?.map((item: Agency) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.website}</td>
            <td>
              <Space size="middle">
                <a href={`/editar-agencia/${item.id}`}>
                  <span>{editIcon}</span>
                </a>
                <Popconfirm
                  title="Excluir agência"
                  description="Deseja realmente excluir esta agência?"
                  icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                  onConfirm={() => mutation.mutate(item.id)}
                  onCancel={() => {}}
                  okType="danger"
                  okText="Excluir"
                  cancelText="Cancelar"
                >
                  <div style={{ cursor: 'pointer' }}>
                    <span>{deleteIcon}</span>
                  </div>
                </Popconfirm>
              </Space>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
