import Clicker from './components/Clicker'
import FilteredList from './components/List2'
import List from './components/List'

// Faço a importação dos meus 3 componentes

function App() {
  return (
    <>
    {/* Chamo eles para serem renderizados no meu site */}
      <Clicker />
      <List />
      <FilteredList />
    </>
  )
}

export default App
