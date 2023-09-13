import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Loginpage/Login';
import Chat from './Chatpage/Chat';


function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/loginpage" element={<Login />} />
          <Route path="/Chatpage" element={< Chat />} />
        
        </Routes>
      </Router>




    </div>
  );
}

export default App;
