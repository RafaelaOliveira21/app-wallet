import { View, Text } from 'react-native'
import React from 'react'
import { Container } from './styles'

interface IButtonProps {
  title: string
}

export const Button = ({ title}: IButtonProps) => {
  return (
    <Container>
      <Text>Entrar</Text>
    </Container>
  )
}

export { Button }
