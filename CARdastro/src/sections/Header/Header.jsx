import React from 'react'
import { Flex, Wrap, WrapItem, Avatar, Text } from '@chakra-ui/react'
import { image } from '../../assets/images/Marcelo'

export const Header = () => {
  return (
    <Flex w='100%' h='10vh' bgColor='#1D3557' p='15px' fontWeight='bold' fontSize='25px' color='#fff' justify='space-between' align='center'>
      <Flex w='200px' borderRadius='10px' align='center' justify='center' h='50px' bgColor='#fff'>
        <Text fontSize='25px' color='#1D3557'>CARdastro</Text>
      </Flex>
      <Wrap>
        <WrapItem>
          <Avatar size='lg' name='Dan Abrahmov' src={image} />
        </WrapItem>
      </Wrap>
    </Flex>
  )
}
