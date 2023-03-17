import { Component } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Topnavber from './components/Topnavber';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

class App  extends Component {
  render(){
    return (
      <BrowserRouter>
       <Topnavber />
        <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />

        </Routes>

      </div>
      <Footer />
      </BrowserRouter>
    );
}
}

export default App;
