import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/shop';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
function App() {
  const [progress, setProgress] = useState(0)
  return (
    <div className="">
     
     <Navbar/>
     {/* <Shop/> */}
    </div>
  );
}

export default App;
