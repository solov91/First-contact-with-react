import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Setting from "./pages/Setting";

function App() {
  return (
    <Router>
          <div className="App">
      <Navbar />
      <div className="conteiner main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recepies" element={<Recipes />} />
          <Route path="/settings" element={<Setting />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
