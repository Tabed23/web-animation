import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { Routes , Route} from 'react-router-dom'
import About from './pages/About/About';
import Play from './pages/Play/Play';
import Govenda from './pages/Govenda/Govenda';
import Gpt from './pages/Gpt/Gpt';
import Davis from './pages/Davis/Davis';
import Footer from './components/Footer/Footer';
function App() {
  
  return (
    
      <>
        <Header />
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/play' element={<Play/>} />
            <Route exact path='/govenda' element={<Govenda/>} />
            <Route exact path='/gpt' element={<Gpt />} />
            <Route exact path='/davis' element={<Davis />} />

          </Routes>
          <Footer />
      </>
  );
}

export default App;
