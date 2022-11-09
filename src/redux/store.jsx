import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
