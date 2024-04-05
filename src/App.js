import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to={'/about'}>
        <h2>About</h2>
      </Link>
    </>
  );
};

const About = () => {
  return <h1>About</h1>;
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
