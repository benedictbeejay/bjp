import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="App">
       <Nav />
       <Home />
       <About />
       <Projects />
       <Contact  />
    </div>
  );
}

export default App;
