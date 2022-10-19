import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContextProvider } from './contexts/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <ChakraProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </ContextProvider>
)
