import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './Component/Navbar1'
import Home from './Pages/Home';
import Player from './Pages/Player'
import{Routes,Route,BrowserRouter} from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <NavScrollExample/>
  <Routes>
  <Route path ='/' element={<Home/>} />
  <Route path= '/player' element={<Player/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
