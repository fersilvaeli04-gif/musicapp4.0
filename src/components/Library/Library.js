import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Song from '../Song/Song';
import { removeSong } from '../../redux/slices/librarySlice';
import { Panel, SectionTitle, CountBadge } from '../../styles/shared';
import { LibraryList, EmptyMessage } from './Library.styles';

function Library() {
  const songs = useSelector((state) => state.library);
  const dispatch = useDispatch();

  return (
    <Panel $accent="teal">
      <SectionTitle>
        Mi biblioteca
        {songs.length > 0 && <CountBadge $color="teal">{songs.length}</CountBadge>}
      </SectionTitle>

      {songs.length === 0 ? (
        <EmptyMessage>
          Todavía no has agregado canciones. Búscalas arriba y añádelas aquí.
        </EmptyMessage>
      ) : (
        <LibraryList>
          {songs.map((song, i) => (
            <Song
              key={song.id}
              id={song.id}
              index={i + 1}
              title={song.title}
              artist={song.artist}
              album={song.album}
              isAdded
              onRemove={() => dispatch(removeSong(song.id))}
            />
          ))}
        </LibraryList>
      )}
    </Panel>
  );
}

export default Library;
