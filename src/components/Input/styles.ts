import styled from 'styled-components/native'
import { theme } from '../../global/theme'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  width: 100%;
  margin-bottom: 20px;
`

export const Title = styled.Text`
  color: ${theme.colors.slate100};
  margin-bottom: 5px;

  font-family: ${theme.fonts.semiBold};

  font-size: ${RFValue(15)}px;
`

export const InputText = styled.TextInput`
  width: 100%;
  height: ${RFValue(40)}px;
  background-color: ${theme.colors.white};

  border-radius: 5px;

  padding: 10px;
`
