import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Song from '../Song/Song';
import { addSong } from '../../redux/slices/librarySlice';
import { fetchSongs } from '../../redux/slices/searchSlice';
import {
  Panel,
  SectionTitle,
  CountBadge,
  StatusMessage,
  LoadingMessage,
  StatusError,
  RetryButton,
  Spinner,
} from '../../styles/shared';
import { ResultsList } from './SearchResults.styles';

function SearchResults() {
  const dispatch = useDispatch();
  const { results, loading, error, query } = useSelector((state) => state.search);
  const library = useSelector((state) => state.library);

  const libraryIds = new Set(library.map((song) => song.id));

  return (
    <Panel $accent="sky">
      <SectionTitle>
        Resultados
        {!loading && !error && results.length > 0 && (
          <CountBadge $color="sky">{results.length}</CountBadge>
        )}
      </SectionTitle>

      {!query && (
        <StatusMessage>
          Busca un artista para ver sus álbumes, por ejemplo "Coldplay" u "Oasis".
        </StatusMessage>
      )}

      {loading && (
        <LoadingMessage>
          <Spinner />
          Cargando...
        </LoadingMessage>
      )}

      {!loading && error && (
        <StatusError>
          <p>Hubo un problema al cargar los datos. Intenta nuevamente.</p>
          <RetryButton type="button" onClick={() => dispatch(fetchSongs(query))}>
            Reintentar
          </RetryButton>
        </StatusError>
      )}

      {!loading && !error && query && results.length === 0 && (
        <StatusMessage>No se encontraron resultados para "{query}".</StatusMessage>
      )}

      {!loading && !error && results.length > 0 && (
        <ResultsList>
          {results.map((song, i) => (
            <Song
              key={song.id}
              id={song.id}
              index={i + 1}
              title={song.title}
              artist={song.artist}
              album={song.album}
              isAdded={libraryIds.has(song.id)}
              onAdd={() => dispatch(addSong(song))}
            />
          ))}
        </ResultsList>
      )}
    </Panel>
  );
}

export default SearchResults;
