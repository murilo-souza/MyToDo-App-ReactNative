import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.colors.zinc900};

  padding: 20px;
`

export const Form = styled.ScrollView`
  flex: 1;
  margin-bottom: 15px;
`
