import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Flex w='100%' h='10vh' position='fixed' bottom='0' align='center' justify='center' bgColor='#5C6672'>
      <Text fontWeight='bold' fontSize='20px' color='#1E1E24'>@ Site feito por Marcelo Bracet @</Text>
    </Flex>
  )
}
