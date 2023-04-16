import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.colors.zinc900};

  padding: 20px;
`
export const NoteContainer = styled.ScrollView`
  background-color: ${(props) => props.theme.colors.zinc800};
  border: 2px solid ${(props) => props.theme.colors.indigo600};

  border-radius: 5px;

  margin-bottom: 10px;
`

export const ButtonContainer = styled.View`
  gap: 20px;
`
