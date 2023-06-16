import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacsSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});
