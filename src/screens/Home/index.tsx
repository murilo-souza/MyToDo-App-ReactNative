import React from 'react'
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
import { FlatList } from 'react-native'
import { NewTaskButton } from '../../components/NewTaskButton'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const theme = useTheme()
  const navigation = useNavigation()

  function handleGoToNewTask() {
    navigation.navigate('new')
  }

  function handleGoToNotes(taskId: string) {
    navigation.navigate('notes', { taskId })
  }

  return (
    <Container>
      <Header>
        <LogoContainer>
          <LogoSVG width={50} height={50} />
          <Title>
            My Daily <TitleHighlight>Tasks</TitleHighlight>
          </Title>
        </LogoContainer>
        <SignOut size={25} color={theme.colors.zinc400} />
      </Header>

      {/* <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NewTaskCard
            title={item.title}
            description={item.description}
            principal={item.principal}
            isComplete={item.isComplete}
            date={item.date}
            onPress={() => handleGoToNotes(item.id)}
          />
        )}
      /> */}
      <AddNewTaskContainer>
        <NewTaskButton onPress={handleGoToNewTask} />
      </AddNewTaskContainer>
    </Container>
  )
}
