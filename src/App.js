import { Route, Routes, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import { lazy, useEffect, useState } from 'react';

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
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/user/:username" element={<GitHubUser />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/search" element={<SearchGitHubUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
