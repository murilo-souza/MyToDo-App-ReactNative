import styled from 'styled-components/native'
import { theme } from '../../global/theme'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  background-color: ${theme.colors.zinc900};

  padding: 20px;
`

export const LogoContainer = styled.View`
  align-items: center;
  margin-bottom: 30px;
`

export const SignInButton = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(50)}px;

  background-color: ${(props) => props.theme.colors.indigo600};

  align-items: center;
  justify-content: center;

  border-radius: 5px;
`

export const ButtonTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.semiBold};
  font-size: ${RFValue(15)}px;

  color: ${(props) => props.theme.colors.white};
`
