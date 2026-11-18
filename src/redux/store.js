import { configureStore } from '@reduxjs/toolkit';
import libraryReducer from './slices/librarySlice';
import searchReducer from './slices/searchSlice';

// configureStore combina los slices y activa Redux DevTools y thunk automáticamente.
// El estado global queda como { library: [...], search: { results, loading, error, query } }
const store = configureStore({
  reducer: {
    library: libraryReducer,
    search: searchReducer,
  },
});

export default store;
