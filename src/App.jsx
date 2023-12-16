import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './components/shared/HeaderComponents'
import BannerComponent from './components/shared/BannerComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <BannerComponent></BannerComponent>
    </>
  )
}

export default App
