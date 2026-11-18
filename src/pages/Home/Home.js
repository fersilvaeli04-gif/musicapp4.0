import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';
import Library from '../../components/Library/Library';
import { Main } from './Home.styles';

function Home() {
  return (
    <Main>
      <SearchBar />
      <SearchResults />
      <Library />
    </Main>
  );
}

export default Home;
