import './App.css';
import { UserProvider } from './context/userContext';
import Main from './pages/main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/register';
import About from './pages/about';
import Pokedex from './pages/pokedex';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}  />
        <Route path='/pokedex' element={ <Pokedex />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>  
   );
}


function AppWrapper() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}
export default AppWrapper;
