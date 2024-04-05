import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { lazy, Suspense } from 'react';

const SearchGitHubUser = lazy(() => import('./components/SearchGitHubUser'));
const GitHubUser = lazy(() => import('./components/GitHubUser'));

const Home = () => {
  return <h1>Home</h1>;
};

const NotFound = () => {
  return <h1>Not Found</h1>;
};

function App() {
  return (
    <div>
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/user/:username" element={<GitHubUser />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/search" element={<SearchGitHubUser />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
