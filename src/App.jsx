import {Counter} from '../src/components/Counter/Counter'
import './components/Counter/Counter.css'
import { DolarApi } from './components/DolarApi/DolarApi'
import { NavBar } from './components/NavBar/NavBar'
import { PokeApi } from './components/PokeApi/PokeApi'
// import './App.css'

function App() {

  return (
    <>
    <NavBar/>
    <PokeApi/>
     <Counter/>
     <DolarApi/>
    </>
  )
}

export default App
