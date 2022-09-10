import React, { useState } from 'react'
import { formatValue } from '../../helpers/formatValue'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  useDisclosure,
  Button,
  Input,
  Flex,
  Select,
  Text,
} from '@chakra-ui/react'
import carList from '../../carList/carList.json'

export const Main = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [name, setName] = useState('')
  const [carValue, setCarValue] = useState('')
  const [carType, setCarType] = useState('Chevrolet')
  const [listOfCars, setListOfCars] = useState([carList])

  const handleValueChange = (e) => {
    const valor = e.target.value;
    setCarValue(valor)
  }

  const handleChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  }

  const handleChangeTypeCar = (e) => {
    const carType = e.target.value;
    setCarType(carType);
  }

  return (
    <Flex flexDir='column' pt='20px' align='center' w='100%' h='80vh' bgColor='#EEE'>
      <Button bgColor='#1D3557' onClick={onOpen} _hover={{ opacity: 0.4 }} color='#fff' mb='20px'>Vender Carro</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent alignSelf='center'>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name:</FormLabel>
              <Input value={name} onChange={handleChangeName} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Car Brand:</FormLabel>
              <Select onChange={handleChangeTypeCar} defaultValue={carType} placeholder='Marca'>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Citroen">Citroen</option>
                <option value="Ferrari">Ferrari</option>
                <option value="Jeep">Jeep</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Audi">Audi</option>
                <option value="Range Rover">Range Rover</option>
                <option value="Tesla">Tesla</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Valor da Compra:</FormLabel>
              <Input value={carValue} onChange={handleValueChange} placeholder='Preço' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex justify='center' align='center'>{listOfCars.map((item, index) => {
        return (
          <Flex
            gap='20px'
            w='1000px'
            flexDir='column'
            bgColor='#CCC'
            p='10px'
            borderRadius='10px'
            key={index}>
            {item.carList.map((item, index) => (
              <Flex borderRadius='5px' p='15px' bgColor='#ffffff' justify='space-between' key={index} align='center' m='10px'>
                <Text>Nome: {item.name}</Text>
                <Text>Marca: {item.brandCar}</Text>
                <Text fontWeight='bold'>Valor da compra: {formatValue(parseFloat(item.value))}</Text>
              </Flex>
            ))}
          </Flex>
        )
      })}</Flex>
    </Flex>
  )
}
