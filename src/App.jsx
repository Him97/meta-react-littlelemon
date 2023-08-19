import { useState } from 'react'
import DessertsList from "./components/DessertsList";
import { Container } from '@chakra-ui/react';
import Goals from './pages/Goals/Goals';



export default function App() {

  return (
    <Container height={100}>
      <Goals />
    </Container>
  )
}