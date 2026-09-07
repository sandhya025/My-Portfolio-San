import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetail from './pages/ProjectDetail';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/projects"     element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/blog"         element={<BlogPage />} />
          <Route path="/blog/:id"     element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
