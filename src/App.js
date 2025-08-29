import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
