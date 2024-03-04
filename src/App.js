import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

// //////////----------------//////////
/////////////////////////////-------------------////////
import Navbar from "./Navbar"
import Routing from './Routers/Routes';

function App(){
  return ( 
    <div className='App'>
      <Navbar />
      <Routing />
    </div>
  )
}
export default App;