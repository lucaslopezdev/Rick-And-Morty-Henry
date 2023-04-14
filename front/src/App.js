import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Title from './components/Title/Title'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

function App () {

  const onSearch = (id) => {
    const URL_BASE = 'http://localhost:3001/rickandmorty/onsearch/'

    if (characters.find(char => char.id === id)){
      return alert('Personaje repetido');
    }

    fetch(`${URL_BASE}/character/${id}`)
      .then(response=>response.json())
      .then((data)=>{
        if (data.name) {
          setCharacters((oldChars)=>[...oldChars, data]);
        } else {
            window.alert('No hay personajes con ese ID')
        }
      })
  };

  const onClose = (id) => { setCharacters(characters.filter((char)=> char.id !== id)) };

  const [characters, setCharacters] = useState([])

  return (
    <div className='App' style={{ padding: '30px' }}>
        <Title />
        <Nav onSearch={onSearch}/>
        <Routes>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />

          <Route path='/about' element={<About />} />

          <Route path='/detail/:detailId' element={<Detail />} />
        </Routes>
    </div>
  )
}

export default App
