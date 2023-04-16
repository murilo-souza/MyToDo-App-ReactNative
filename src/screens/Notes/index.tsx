/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { ButtonContainer, Container, NoteContainer } from './styles'
import { Header } from '../../components/Header'
import { InputBig } from '../../components/InputBig'
import { Button } from '../../components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore'
import { Alert } from 'react-native'

type RouteParams = {
  taskId: string
}

type NotesProps = {
  note: string
  created_at: FirebaseFirestoreTypes.Timestamp
}

export function Notes() {
  const route = useRoute()
  const navigation = useNavigation()
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState<NotesProps[]>([])

  const { taskId } = route.params as RouteParams

  function handleCompleteTask() {
    firestore().collection('tasks').doc(taskId).update({
      isComplete: true,
      finished_at: firestore.FieldValue.serverTimestamp(),
    })

    navigation.navigate('home')
  }

  function handleNotes() {
    if (note === '') {
      return Alert.alert(
        'Campo de nota vazio',
        'Por favor digite algo para adicionar',
      )
    }

    firestore().collection('tasks').doc(taskId).collection('notes').doc().set({
      note,
      created_at: firestore.FieldValue.serverTimestamp(),
    })
  }

  useEffect(() => {
    firestore()
      .collection('tasks')
      .doc(taskId)
      .collection('notes')
      .orderBy('created_at', 'desc')
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const { note, created_at } = doc.data()

          return {
            id: doc.id,
            note,
            created_at,
          }
        })
        setNotes(data)
      })
  }, [taskId])

  return (
    <Container>
      <Header title="Notas adicionais" />
      <NoteContainer></NoteContainer>

      <InputBig
        title="Nova nota"
        placeholder="Adicione uma nota relevante"
        size="md"
      />

      <ButtonContainer>
        <Button
          title="Adicionar nota"
          variant="complete"
          onPress={handleNotes}
        />
        <Button
          title="Finalizar task"
          variant="default"
          onPress={handleCompleteTask}
        />
      </ButtonContainer>
    </Container>
  )
}
