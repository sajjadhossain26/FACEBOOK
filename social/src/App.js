import {Route, Routes} from 'react-router-dom'
import Login from './pages/Login/Login';
import "./App.scss"


function App() {
  return (
   <>
     <Routes>
       <Route path='/' element={<Login/>}/>
     </Routes>
   </>
  );
}

export default App;
