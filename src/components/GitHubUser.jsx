import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

export default GitHubUser;
