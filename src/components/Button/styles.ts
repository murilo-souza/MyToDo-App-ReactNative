import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

interface ButtonProps {
  variant: 'default' | 'complete'
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  height: ${RFValue(50)}px;

  ${({ variant }) =>
    variant === 'default' &&
    css`
      background-color: ${(props) => props.theme.colors.indigo600};
    `}

  ${({ variant }) =>
    variant === 'complete' &&
    css`
      background-color: ${(props) => props.theme.colors.white};
    `}

  align-items: center;
  justify-content: center;

  border-radius: 5px;
`

export const Title = styled.Text<ButtonProps>`
  font-family: ${(props) => props.theme.fonts.semiBold};
  font-size: ${RFValue(15)}px;
  ${({ variant }) =>
    variant === 'default' &&
    css`
      color: ${(props) => props.theme.colors.white};
    `};

  ${({ variant }) =>
    variant === 'complete' &&
    css`
      color: ${(props) => props.theme.colors.zinc800};
    `};
`
