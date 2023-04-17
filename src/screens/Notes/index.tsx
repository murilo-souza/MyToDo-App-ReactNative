/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import {
  ButtonContainer,
  Container,
  Date,
  Divider,
  EmptyContainer,
  EmptyTitle,
  Note,
  NoteContainer,
  Text,
  TextsContainer,
} from './styles'
import { Header } from '../../components/Header'
import { InputBig } from '../../components/InputBig'
import { Button } from '../../components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore'
import { Alert, FlatList } from 'react-native'
import { dateFormat } from '../../utils/editFirebaseTimestamp'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Trash, X } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { Loading } from '../../components/Loading'

type RouteParams = {
  taskId: string
  isComplete: boolean
}

type NotesProps = {
  id: string
  note: string
  created_at: FirebaseFirestoreTypes.Timestamp
}

export function Notes() {
  const theme = useTheme()
  const route = useRoute()
  const navigation = useNavigation()
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState<NotesProps[]>([])
  const [loading, setLoading] = useState(false)

  const { taskId, isComplete } = route.params as RouteParams

  function handleCompleteTask() {
    setLoading(true)
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

    setNote('')
  }

  function handleDeleteNote(noteId: string) {
    firestore()
      .collection('tasks')
      .doc(taskId)
      .collection('notes')
      .doc(noteId)
      .delete()
  }

  function handleDeleteTask() {
    firestore().collection('tasks').doc(taskId).delete()

    navigation.navigate('home')
  }

  function AlertDeleteTask() {
    Alert.alert(
      'Deletar receita',
      'Tem certeza que deseja excluir essa task?',
      [
        {
          text: 'Manter',
          onPress: () => {},
          style: 'cancel',
        },
        { text: 'Excluir', onPress: () => handleDeleteTask() },
      ],
    )
  }

  function handleReactivateTask() {
    firestore().collection('tasks').doc(taskId).update({
      isComplete: false,
    })

    navigation.navigate('home')
  }

  useEffect(() => {
    setLoading(true)
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
        setLoading(false)
      })
  }, [taskId])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Header title="Notas adicionais" />
          <NoteContainer>
            <FlatList
              data={notes}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Note>
                  <TextsContainer>
                    <Text>{item.note}</Text>
                    <Date>{dateFormat(item.created_at)}</Date>
                  </TextsContainer>
                  {!isComplete && (
                    <BorderlessButton onPress={() => handleDeleteNote(item.id)}>
                      <Trash size={25} color={theme.colors.red600} />
                    </BorderlessButton>
                  )}
                </Note>
              )}
              ItemSeparatorComponent={Divider}
              ListEmptyComponent={
                <EmptyContainer>
                  <X size={30} color={theme.colors.indigo500} />
                  <EmptyTitle>Não ha notas</EmptyTitle>
                </EmptyContainer>
              }
            />
          </NoteContainer>
          {!isComplete && (
            <InputBig
              title="Nova nota"
              placeholder="Adicione uma nota relevante"
              size="md"
              onChangeText={setNote}
              value={note}
              multiline
            />
          )}

          <ButtonContainer>
            {!isComplete ? (
              <>
                <Button
                  title="Adicionar nota"
                  variant="complete"
                  onPress={handleNotes}
                />
                <Button
                  isLoading={loading}
                  enabled={!loading}
                  title="Finalizar task"
                  variant="default"
                  onPress={handleCompleteTask}
                />
              </>
            ) : (
              <>
                <Button
                  isLoading={loading}
                  enabled={!loading}
                  title="Reativar tarefa"
                  variant="default"
                  onPress={handleReactivateTask}
                />
                <Button
                  title="Deletar tarefa"
                  variant="delete"
                  onPress={AlertDeleteTask}
                />
              </>
            )}
          </ButtonContainer>
        </Container>
      )}
    </>
  )
}
