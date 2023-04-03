import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin-top: ${getStatusBarHeight()}px;
  margin-bottom: 20px;
`
export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.semiBold};
  font-size: ${RFValue(16)}px;

  color: ${(props) => props.theme.colors.white};
`
