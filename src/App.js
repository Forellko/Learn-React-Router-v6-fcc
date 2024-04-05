import { Route, Routes, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import { lazy, useEffect, useState } from 'react';

const SearchGitHubUser = lazy(() => import('./components/SearchGitHubUser'));

const Home = () => {
  return <h1>Home</h1>;
};

const fetchGitHubUser = async ({ username, setUser }) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const user = await response.json();
  console.log(user);
  setUser(user);
};

const GitHubUser = () => {
  const [user, setUser] = useState();
  const paramUser = useParams();

  useEffect(() => {
    fetchGitHubUser({ username: paramUser.username, setUser });
  }, []);

  return (
    <>
      <img src={user?.avatar_url} alt="avatar" />
      <h2>{user?.login}</h2>
    </>
  );
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
