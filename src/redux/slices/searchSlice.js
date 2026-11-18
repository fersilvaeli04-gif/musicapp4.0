import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AUDIODB_BASE_URL } from '../../config';

// Thunk: busca los álbumes de un artista en The Audio DB
// y los transforma en objetos "canción" fáciles de usar en la app.
export const fetchSongs = createAsyncThunk(
  'search/fetchSongs',
  async (artistName, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${AUDIODB_BASE_URL}/searchalbum.php?s=${encodeURIComponent(artistName)}`
      );

      if (!response.ok) {
        return rejectWithValue(`La API respondió con el estado ${response.status}.`);
      }

      const data = await response.json();

      return (data.album || []).map((album) => ({
        id: album.idAlbum,
        title: album.strAlbum,
        artist: album.strArtist,
        album: album.strAlbum,
      }));
    } catch (err) {
      return rejectWithValue(err.message || 'No se pudo conectar con la API.');
    }
  }
);

const initialState = {
  results: [],
  loading: false,
  error: null,
  query: '', // último artista buscado (sirve para "Reintentar")
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    resetResults: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.query = action.meta.arg;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { resetResults } = searchSlice.actions;
export default searchSlice.reducer;
