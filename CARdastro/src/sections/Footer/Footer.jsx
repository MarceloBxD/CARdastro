import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Flex w='100%' h='10vh' position='fixed' bottom='0' align='center' justify='center' bgColor='#1D3557'>
      <Text fontWeight='bold' fontSize='20px' color='#FFFFFF'>@ Site feito por Marcelo Bracet @</Text>
    </Flex>
  )
}
