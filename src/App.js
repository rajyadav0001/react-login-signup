import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ProtectedRoutes from './Components/ProtectedRoutes';
function App() {
  return (
    <div className="App">
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<ProtectedRoutes/>}>
                   <Route path='/' element={<Home/>}/>
               </Route>               
               <Route path='/login' element={<Login/>}/>
               <Route path='/signup' element={<Signup/>}/>
            </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
