import './App.css';
import Nav from './components/nav';
import Home from './components/home';
import Projects from './components/projects';
import Profile from './components/profile';
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
