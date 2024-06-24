/* eslint-disable @typescript-eslint/no-explicit-any */
import { QuestionCircleOutlined } from '@ant-design/icons'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Popconfirm, Space } from 'antd'

import { deleteIcon, editIcon } from '../../config/icons'
import { api } from '../../services/api'
import { notify } from '../Toast'
import styles from './styles.module.scss'

export const ListAgencies = ({ data, filtered }: any) => {
  const queryClient = useQueryClient()
  const headers = ['name', 'email', 'phone', 'website']

  const mutation = useMutation({
    mutationFn: (id) => {
      return api.delete(`/agencies/${id}`)
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`agencies`] })
      notify({ type: 'success', message: 'Agência deletada com sucesso!' })
    },
    onError() {
      notify({ type: 'error', message: 'Falha ao deletar agência!' })
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
        {(filtered || data)?.map((item: any) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.website}</td>
            <td>
              <Space size="middle">
                <a href={`/update/${item.id}`}>
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
