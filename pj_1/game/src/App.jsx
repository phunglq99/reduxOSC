import './App.css'
import SideBar from './components/SideBar'

function App() {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3"><SideBar /></div>
        <div className="col-7">9</div>
        <div className="col-2">4</div>
      </div>
    </div>

  )
}

export default App
