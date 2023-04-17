/* eslint-disable camelcase */
import React, { useCallback, useState } from 'react'
import {
  AddNewTaskContainer,
  Container,
  Header,
  LogoContainer,
  Title,
  TitleHighlight,
} from './styles'
import LogoSVG from '../../assets/kanban.svg'
import { SignOut } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { NewTaskCard } from '../../components/NewTaskCard'
import { FlatList, Alert } from 'react-native'
import { NewTaskButton } from '../../components/NewTaskButton'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore'
import { BorderlessButton } from 'react-native-gesture-handler'
import auth from '@react-native-firebase/auth'

type TaskCardProps = {
  id: string
  title: string
  principal: string
  description: string
  isComplete: boolean
  created_at: FirebaseFirestoreTypes.Timestamp
  finished_at: FirebaseFirestoreTypes.Timestamp
}

export function Home() {
  const theme = useTheme()
  const navigation = useNavigation()
  const [tasks, setTasks] = useState<TaskCardProps[]>([])

  function handleGoToNewTask() {
    navigation.navigate('new')
  }

  function handleGoToNotes(taskId: string, isComplete: boolean) {
    navigation.navigate('notes', { taskId, isComplete })
  }

  function handleSignOut() {
    Alert.alert('Sair da conta', 'Tem certeza que deseja sair da sua conta?', [
      {
        text: 'Manter',
        onPress: () => {},
        style: 'cancel',
      },
      { text: 'Sair', onPress: () => auth().signOut() },
    ])
  }

  useFocusEffect(
    useCallback(() => {
      firestore()
        .collection('tasks')
        .orderBy('created_at', 'desc')
        .onSnapshot((snapshot) => {
          const data = snapshot.docs.map((doc) => {
            const {
              title,
              principal,
              description,
              isComplete,
              created_at,
              finished_at,
            } = doc.data()

            return {
              id: doc.id,
              title,
              principal,
              description,
              isComplete,
              created_at,
              finished_at,
            }
          })
          setTasks(data)
        })
    }, []),
  )

  return (
    <Container>
      <Header>
        <LogoContainer>
          <LogoSVG width={50} height={50} />
          <Title>
            My Daily <TitleHighlight>Tasks</TitleHighlight>
          </Title>
        </LogoContainer>
        <BorderlessButton onPress={handleSignOut}>
          <SignOut size={25} color={theme.colors.zinc400} />
        </BorderlessButton>
      </Header>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NewTaskCard
            title={item.title}
            description={item.description}
            principal={item.principal}
            isComplete={item.isComplete}
            createdAt={item.created_at}
            finishedAt={item.finished_at}
            onPress={() => handleGoToNotes(item.id, item.isComplete)}
          />
        )}
      />
      <AddNewTaskContainer>
        <NewTaskButton onPress={handleGoToNewTask} />
      </AddNewTaskContainer>
    </Container>
  )
}
