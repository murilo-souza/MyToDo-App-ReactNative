import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.colors.zinc900};
`
export const Header = styled.View`
  background-color: ${(props) => props.theme.colors.zinc800};
  width: 100%;
  height: ${RFValue(150)}px;

  align-items: center;

  justify-content: space-between;

  flex-direction: row;

  padding-top: ${getStatusBarHeight()}px;
  padding: 20px;
`

export const LogoContainer = styled.View``
