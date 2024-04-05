import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchGitHubUser = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const submit = () => {
    navigate(`/user/${search}`);
  };

  return (
    <>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <input type="button" value="find" onClick={submit} />
    </>
  );
};

export default SearchGitHubUser;
