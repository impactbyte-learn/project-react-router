import React from 'react'
import styled from '@emotion/styled'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { AppRouterNested } from './components/AppRouterNested'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex-grow: 1;
`

const App = () => {
  return (
    <Container>
      <Header />

      <Main>
        <AppRouterNested />
      </Main>

      <Footer />
    </Container>
  )
}

export default App
