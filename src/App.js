
import './App.css';
import About from './Pages/About';
import { GetInTouch } from './Pages/GetInTouch';
import Header from './Pages/Header';
import { Projects } from './Pages/Projects';
import { Footer } from './Pages/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <About />
      <Projects />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
