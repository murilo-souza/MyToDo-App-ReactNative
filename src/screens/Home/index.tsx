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

const data = [
  {
    id: '1',
    title: 'Mandar e-mail prestec',
    description:
      'Mandar e-mail para prestec pedindo orçamento de um novo relógio comparador Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore necessitatibus dolor ipsum quisquam eum? Fuga asperiores aut voluptatem, optio voluptatibus error laboriosam necessitatibus debitis tempore laudantium dolorem aliquam quis voluptas.',
    principal: 'Pollis',
    isComplete: true,
  },
  {
    id: '2',
    title: 'Mandar e-mail prestec',
    description:
      'Mandar e-mail para prestec pedindo orçamento de um novo relógio comparador Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore necessitatibus dolor ipsum quisquam eum? Fuga asperiores aut voluptatem, optio voluptatibus error laboriosam necessitatibus debitis tempore laudantium dolorem aliquam quis voluptas.',
    principal: 'Pollis',
    isComplete: false,
  },
  {
    id: '3',
    title: 'Mandar e-mail prestec',
    description:
      'Mandar e-mail para prestec pedindo orçamento de um novo relógio comparador Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore necessitatibus dolor ipsum quisquam eum? Fuga asperiores aut voluptatem, optio voluptatibus error laboriosam necessitatibus debitis tempore laudantium dolorem aliquam quis voluptas.',
    principal: 'Pollis',
    isComplete: true,
  },
]

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

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NewTaskCard
            title={item.title}
            description={item.description}
            principal={item.principal}
            isComplete={item.isComplete}
            onPress={() => handleGoToNotes(item.id)}
          />
        )}
      />
      <AddNewTaskContainer>
        <NewTaskButton onPress={handleGoToNewTask} />
      </AddNewTaskContainer>
    </Container>
  )
}
