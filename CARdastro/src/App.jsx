import { Flex } from "@chakra-ui/react"
import { Header } from './sections/Header'
import { Main } from "./sections/Main"
import { Footer } from "./sections/Footer"

export default function App(){
  return (
    <Flex flexDir='column'>
      <Header/>
      <Main/>
      <Footer/>
    </Flex>
  )
}