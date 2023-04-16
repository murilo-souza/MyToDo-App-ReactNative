import React from 'react'
import {
  Container,
  Description,
  Header,
  Principal,
  TextArea,
  TextSections,
  Time,
  Title,
} from './styles'
import TaskComplete from '../../assets/task_complete.svg'
import TaskNoComplete from '../../assets/task_no_complete.svg'
import { RectButtonProps } from 'react-native-gesture-handler'
import { dateFormat } from '../../utils/editFirebaseTimestamp'
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

type NewTaskCardProps = RectButtonProps & {
  title: string
  description: string
  principal: string
  isComplete: boolean
  date: FirebaseFirestoreTypes.Timestamp
}

export function NewTaskCard({
  title,
  description,
  principal,
  isComplete,
  date,
  ...rest
}: NewTaskCardProps) {
  return (
    <Container {...rest}>
      <TextSections>
        <Header>
          {isComplete ? (
            <TaskComplete width={50} height={50} />
          ) : (
            <TaskNoComplete width={50} height={50} />
          )}
          <TextArea>
            <Title>Mandar e-mail prestec</Title>
            <Principal>Mandante: {principal}</Principal>
          </TextArea>
        </Header>
        <Description>
          Mandar e-mail para prestec pedindo orçamento de um novo relógio
          comparador Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Inventore necessitatibus dolor ipsum quisquam eum? Fuga asperiores aut
          voluptatem, optio voluptatibus error laboriosam necessitatibus debitis
          tempore laudantium dolorem aliquam quis voluptas.
        </Description>
        {isComplete ? (
          <Time>Data de conclusão: {dateFormat(date)}</Time>
        ) : (
          <Time>Data de inicio: {dateFormat(date)}</Time>
        )}
      </TextSections>
    </Container>
  )
}
