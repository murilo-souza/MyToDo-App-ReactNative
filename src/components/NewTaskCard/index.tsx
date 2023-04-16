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
  createdAt: FirebaseFirestoreTypes.Timestamp
  finishedAt: FirebaseFirestoreTypes.Timestamp
}

export function NewTaskCard({
  title,
  description,
  principal,
  isComplete,
  createdAt,
  finishedAt,
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
            <Title>{title}</Title>
            <Principal>Mandante: {principal}</Principal>
          </TextArea>
        </Header>
        <Description>{description}</Description>
        <Time>Data de inicio: {dateFormat(createdAt)}</Time>
        {isComplete && <Time>Data de conclusão: {dateFormat(finishedAt)}</Time>}
      </TextSections>
    </Container>
  )
}
