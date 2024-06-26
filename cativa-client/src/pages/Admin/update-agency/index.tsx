import { Button } from 'antd'
import { useEffect, useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { useNavigate, useParams } from 'react-router-dom'

import Loader from '../../../components/loader'
import { notify } from '../../../components/Toast'
import { useGetAgencyById } from '../../../hooks/useGetAgencyById'
import { api } from '../../../services/api'
import { Agency } from '../../../types/agency.type'
import styles from './styles.module.scss'

const initialState = {
  id: '',
  name: '',
  phone: '',
  email: '',
  website: '',
}

export const UpdateAgency = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { id } = useParams()
  const [agency, setAgency] = useState<Agency>(initialState)
  const [error, setError] = useState<boolean>(false)
  const navigate = useNavigate()
  const { data, isLoading: isLoadingUserData } = useGetAgencyById(id as string)

  useEffect(() => {
    setAgency({
      id: data?.id,
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
      website: data?.website,
    })
  }, [id, data])

  const onChangeInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setAgency({ ...agency, [name]: value })
  }

  const handleSubmit = async () => {
    const requiredIsNotFilled = !agency.name || !agency.email

    if (requiredIsNotFilled) {
      setError(true)
      throw new Error('All fields must be filled.')
    }
    try {
      setIsLoading(true)

      try {
        await api.put(`/agencies/update/${id}`, agency)
        notify({ type: 'success', message: 'Agência atualizada com sucesso!' })
        setIsLoading(false)
        setError(false)
        navigate('/')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        notify({
          type: 'error',
          message: error.response.data || 'Algo deu errado',
        })
        console.log(error)
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  if (isLoading || isLoadingUserData) return <Loader />

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 style={{ color: '#333', margin: '0' }}>Editar Associado</h1>

        <label className={styles.label} htmlFor="name">
          Nome
        </label>
        <input
          value={agency.name}
          name="name"
          type="text"
          className={styles.input}
          onChange={onChangeInput}
        />

        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          value={agency.email}
          name="email"
          type="email"
          className={styles.input}
          onChange={onChangeInput}
        />

        <label className={styles.label} htmlFor="phone">
          Telefone
        </label>
        <input
          value={agency.phone}
          name="phone"
          type="text"
          className={styles.input}
          onChange={onChangeInput}
          maxLength={11}
        />

        <label className={styles.label} htmlFor="website">
          Website
        </label>
        <input
          value={agency.website}
          name="website"
          type="website"
          className={styles.input}
          onChange={onChangeInput}
        />

        <div className={styles.btnContainer}>
          <div>
            <Button type="primary" onClick={handleSubmit} disabled={isLoading}>
              Adicionar
            </Button>
          </div>
          <a href={'/associados'}>
            <Button type="default">Cancelar</Button>
          </a>
        </div>

        {error && (
          <p className={styles.error}>
            Todos os campos devem ser preenchidos.{' '}
            <span
              onClick={() => setError(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <IoCloseCircleOutline size={20} />
            </span>
          </p>
        )}
      </div>
    </div>
  )
}
