import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';


import BackgroundContainer from './components/elements/BackgroundContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/Main.css';


const App = () => {

  return (

    <Router>
      <BackgroundContainer>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </BackgroundContainer>
    </Router>

  )
  };

export default App;