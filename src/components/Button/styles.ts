import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled(RectButton)`
  width: 100%;
  height: ${RFValue(50)}px;

  background-color: ${(props) => props.theme.colors.indigo600};

  align-items: center;
  justify-content: center;

  border-radius: 5px;
`

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.semiBold};
  font-size: ${RFValue(15)}px


  color: ${(props) => props.theme.colors.white};
`
