import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs, resetResults } from '../../redux/slices/searchSlice';
import { Panel, SectionTitle, Spinner } from '../../styles/shared';
import { Form, Input, Button, ClearButton } from './SearchBar.styles';

function SearchBar() {
  const dispatch = useDispatch();
  const { loading, query } = useSelector((state) => state.search);
  const [term, setTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = term.trim();
    if (trimmed && !loading) {
      dispatch(fetchSongs(trimmed));
    }
  };

  const handleClear = () => {
    setTerm('');
    dispatch(resetResults());
  };

  return (
    <Panel $accent="amber">
      <SectionTitle>Buscar canciones</SectionTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Busca un artista (ej. Coldplay)"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
        <Button type="submit" disabled={loading}>
          {loading ? (
            <>
              <Spinner $size="0.9rem" $color="ink" />
              Buscando...
            </>
          ) : (
            'Buscar'
          )}
        </Button>
        {(term || query) && (
          <ClearButton type="button" onClick={handleClear}>
            Limpiar
          </ClearButton>
        )}
      </Form>
    </Panel>
  );
}

export default SearchBar;
