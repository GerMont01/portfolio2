import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/home/home';
import Work from './pages/work/work';
import About from './pages/about/about';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Project from './pages/project/project';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/portfolio2" element={<Home />} />
          <Route path="/portfolio2/about" element={<About />} />
          <Route path="/portfolio2/work" element={<Work />} />
          <Route path="/portfolio2/work/:name" element={<Project />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;