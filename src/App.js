import './App.css'
import SearchAppBar from "./components/AppBar";
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom'
import Tour from './components/Tour';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tour />} />
      </Routes>
    </div>
  );
}

export default App;
