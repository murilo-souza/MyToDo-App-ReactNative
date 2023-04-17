import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.colors.zinc900};

  padding: 20px;
`
export const NoteContainer = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.colors.zinc800};
  border: 2px solid ${(props) => props.theme.colors.indigo600};

  border-radius: 5px;

  margin-bottom: 10px;

  padding: 20px 20px 5px 20px;
`

export const Divider = styled.View`
  width: 100%;
  height: 1px;

  background-color: ${(props) => props.theme.colors.indigo500};

  margin-bottom: 10px;
`

export const Note = styled.View`
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 5px;
  flex-direction: row;
`

export const TextsContainer = styled.View`
  flex-direction: column;
  width: 85%;
`

export const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;

  padding-top: 20px;
`

export const EmptyTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${(props) => props.theme.fonts.semiBold};

  color: ${(props) => props.theme.colors.white};
`

export const Text = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(15)}px;

  text-align: justify;

  color: ${(props) => props.theme.colors.white};

  margin-bottom: 5px;
`

export const Date = styled.Text`
  font-family: ${(props) => props.theme.fonts.semiBold};
  font-size: ${RFValue(13)}px;

  color: ${(props) => props.theme.colors.white};
`

export const ButtonContainer = styled.View`
  gap: 20px;
`
