
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Chats from './pages/Chats';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
   
     <Routes>
      <Route path='/' element={<Home/>}/>
      
      
      <Route path='/chats' element={<Chats/>}/>
      
      
     
     </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
