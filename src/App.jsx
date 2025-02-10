import SeminarList from './components/SeminarList'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Управление семинарами</h1>
      </header>
      <main>
        <SeminarList />
      </main>
    </div>
  )
}

export default App
