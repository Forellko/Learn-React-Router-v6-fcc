import { Route, Routes, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';

const Home = () => {
  return <h1>Home</h1>;
};

const Number = () => {
  const number = useParams();
  return <h1>{number.num}</h1>;
};

const About = () => {
  return <h1>About</h1>;
};

const NotFound = () => {
  return <h1>Not Found</h1>;
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/number/:num" element={<Number />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
