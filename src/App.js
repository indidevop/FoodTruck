import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Pager from "./components/Pager";
import Footer from "./components/Footer";
import DataState from "./contexts/DataState";
function App() {
  return (
    <DataState>
      <div className="App">
        <Home />
        <About />
        <Articles />
        <Pager />
        <Footer />
      </div>
    </DataState>
  );
}

export default App;
