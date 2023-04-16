import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled(RectButton)`
  margin: 20px;

  background-color: ${(props) => props.theme.colors.zinc800};

  padding: 10px;

  flex-direction: row;

  align-items: center;

  border-radius: 5px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.semiBold};
  font-size: ${RFValue(18)}px;

  color: ${(props) => props.theme.colors.white};
`

export const Description = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  text-align: justify;

  color: ${(props) => props.theme.colors.white};
`

export const Principal = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(14)}px

  color: ${(props) => props.theme.colors.white};


`

export const TextArea = styled.View`
  margin-left: 10px;
`

export const TextSections = styled.View`
  margin-left: 10px;
`
export const Time = styled.Text`
  margin-top: 10px;

  font-family: ${(props) => props.theme.fonts.semiBold};
  font-size: ${RFValue(14)}px

  color: ${(props) => props.theme.colors.white};
`
