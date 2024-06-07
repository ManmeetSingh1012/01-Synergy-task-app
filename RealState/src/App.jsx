import { useState } from 'react'

import Header from './components/header'

import Hero from './components/hero'

import Feature from './components/feature'
import HireUs from './components/hireus'

import Documentation from './components/documentation'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Header />

      <Hero/>

      <Feature/>
      <HireUs/>

      <Documentation/>

      <Footer/>
    </div>
      
  )
}

export default App
