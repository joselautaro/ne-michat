import { Counter } from '../src/components/Counter/Counter'
import { DolarApi } from './components/DolarApi/DolarApi'
import { NavBar } from './components/NavBar/NavBar'
import { PokeApi } from './components/PokeApi/PokeApi'
import { Padre } from './components/Props/Padre/Padre'
import {Form} from './components/Form/Form'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// import './App.css'

function App() {


  return (
    <>
      <Router>
          <NavBar />
        <Routes>
          <Route exact path='/' element={<DolarApi/>}/>
          <Route exact path='/contador' element={<Counter/>}/>
          <Route exact path='/pokeapi' element={<PokeApi/>}/>
          <Route exact path='/props' element={<Padre/>}/>
          <Route exact path='/form' element={<Form/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
