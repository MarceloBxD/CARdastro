import React, { useState } from 'react'
import { formatValue } from '../../helpers/formatValue'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
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
  const [carType, setCarType] = useState('Marca')
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

  const pushListItem = () => {
    {
      carValue, name, carType &&
        <Flex>
          {listOfCars.map((item, index) => {
            {
              return (
              <Flex key={index}>
                {item.carList.push({name: name, brandCar: carType, value: carValue})}
                {setListOfCars(listOfCars)}
              </Flex>
              )
            }
          })}
        </Flex>
        setCarType('Marca');
        setName('');
        setCarValue('');
    }
  }

  return (
    <Flex flexDir='column' pt='20px' align='center' w='100%' h='100vh' bgColor='#EEE'>
      <Button bgColor='#24282D' onClick={onOpen} _hover={{ opacity: 0.4 }} color='#fff' mb='20px'>Vender Carro</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent alignSelf='center'>
          <ModalHeader>Dados do carro:</ModalHeader>
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
            <Button onClick={pushListItem} colorScheme='blue' mr={3}>
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
            bgColor='#24282D'
            p='10px'
            borderRadius='10px'
            key={index}>
            {item.carList.map((item, index) => (
              <Flex borderRadius='5px' p='15px' bgColor='#ccc' justify='space-between' color='#000' key={index} align='center' m='10px'>
                <Flex justify='center' align='center'>
                  <Text fontSize='17px'>Nome: {item.name}</Text>
                </Flex>
                <Flex justify='center' align='center'>
                  <Text fontSize='17px' align='center'>Marca: {item.brandCar}</Text>
                </Flex>
                <Flex justify='center' align='center'>
                  <Text fontSize='17px' fontWeight='bold'>Valor da compra: {formatValue(parseFloat(item.value))}</Text>
                </Flex>
                <Button><EditIcon /></Button>
                <Button><DeleteIcon /></Button>
              </Flex>
            ))}
          </Flex>
        )
      })}</Flex>
    </Flex>
  )
}
