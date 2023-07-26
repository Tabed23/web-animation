import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { Routes , Route} from 'react-router-dom'
import About from './pages/About/About';
function App() {
  
  return (
    
      <>
        <Header />
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />

          </Routes>
        
      </>
  );
}

export default App;
