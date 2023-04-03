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
  height: ${RFValue(120)}px;

  align-items: center;

  justify-content: space-between;

  flex-direction: row;

  padding: ${getStatusBarHeight()}px 20px 0 20px;
`

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(20)}px;

  color: ${(props) => props.theme.colors.white};

  margin-left: 10px;
`

export const TitleHighlight = styled.Text`
  color: ${(props) => props.theme.colors.indigo400};
`
export const AddNewTaskContainer = styled.View`
  position: absolute;
  bottom: 13px;
  right: 22px;
`
