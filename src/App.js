import Navbar from './components/navbar';
import './App.css';
import About from './components/about'
import Work from './components/work'
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <About></About>
      <Work></Work>
      <Contact></Contact>
    </div>
  );
}

export default App;
