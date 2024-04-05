import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';

const Home = () => {
  return <h1>Home</h1>;
};

const Number = () => {
  const number = useParams();
  return <h1>{number.num}</h1>;
};

const SearchGitHubUser = () => {
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  const submit = () => {
    navigate(`/user/${search}`);
  };

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input type="button" value="find" onClick={submit} />
    </>
  );
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
          <Route path="/number/:num" element={<Number />} />
          <Route path="/user/:username" element={<GitHubUser />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/search" element={<SearchGitHubUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
