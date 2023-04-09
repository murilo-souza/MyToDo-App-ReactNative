import React from 'react'
import { Container, Form } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { InputForm } from '../../components/Forms/InputForm'
import { InputBigForm } from '../../components/Forms/InputBigForm'

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
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  async function handleNewTask(data: FormData) {
    const NewTask = {
      title: data.title,
      principal: data.principal,
      description: data.description,
      created_at: new Date(),
    }

    console.log(NewTask)
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
        />
        <InputForm
          title="Mandante"
          placeholder="Quem foi o mandante?"
          control={control}
          error={errors.principal && errors.principal.message}
          name={'principal'}
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
        title="Salvar"
        variant="default"
        onPress={handleSubmit(handleNewTask)}
      />
    </Container>
  )
}
