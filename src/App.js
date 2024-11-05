import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './home';
import Header from './header';
import Footer from './footer';
import Signup from './signup';
function App() {
  return (
    <>
    <BrowserRouter>
          <Header/>
            <Routes>
                  <Route path ='/' element = {<Home/>}/>
                  <Route path ='/signup' element = {<Signup/>}/>
                  <Route path ='/login' element = {<Login/>}/>
            </Routes>
            <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
