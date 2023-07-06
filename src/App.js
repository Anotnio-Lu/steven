import './App.css';
import Header from './main/Header';
import Content from './main/Content';
import Footer from './main/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='box'></div>
      <h1 className='welcomeh1'>Welcome</h1>
      <div className="App">
        <Header />
        <div className="content-wrapper">
          <div className="content">
            <Content />
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
