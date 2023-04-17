import React, { useState } from 'react'
import { Container, Form } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { InputForm } from '../../components/Forms/InputForm'
import { InputBigForm } from '../../components/Forms/InputBigForm'
import firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native'

interface FormData {
  title: string
  principal: string
  description: string
}

const schema = yup.object().shape({
  title: yup
    .string()
    .required('Título é obrigatório')
    .max(30, 'Máximo 30 caracteres'),
  principal: yup
    .string()
    .required('O mandante é obrigatório')
    .max(30, 'Máximo 30 caracteres'),
  description: yup.string().required('Descrição é obrigatório'),
})

export function NewTask() {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  async function handleNewTask(data: FormData) {
    setLoading(true)

    const NewTask = {
      title: data.title,
      principal: data.principal,
      description: data.description,
      isComplete: false,
      created_at: firestore.FieldValue.serverTimestamp(),
    }

    await firestore().collection('tasks').doc().set(NewTask)

    navigation.navigate('home')
    setLoading(false)
    reset()
  }

  return (
    <Container>
      <Header title="Nova task" />
      <Form>
        <InputForm
          title="Título da task"
          placeholder="De um título a sua task"
          control={control}
          error={errors.title && errors.title.message}
          name={'title'}
          maxLength={26}
        />
        <InputForm
          title="Mandante"
          placeholder="Quem foi o mandante?"
          control={control}
          error={errors.principal && errors.principal.message}
          name={'principal'}
          maxLength={20}
        />

        <InputBigForm
          control={control}
          error={errors.description && errors.description.message}
          name={'description'}
          title="Descrição da task"
          multiline
          placeholder="Descreva sua task"
          size="lg"
        />
      </Form>
      <Button
        isLoading={loading}
        enabled={!loading}
        title="Salvar"
        variant="default"
        onPress={handleSubmit(handleNewTask)}
      />
    </Container>
  )
}
