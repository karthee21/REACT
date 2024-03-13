import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

// //////////----------------//////////
/////////////////////////////-------------------////////
import Navbar from "./Navbar"
import Routing from './Routers/Routes';
import Practies from './OWN/practiesheader';
import PractiesRoute from "./OWN/PractiesRoute"

function App(){
  return ( 
    <div className='App'>
      <Navbar />
      <Routing />
  {/* ---------------------------- */}
      <Practies/>
      <PractiesRoute/>
    </div>
  )
}
export default App;