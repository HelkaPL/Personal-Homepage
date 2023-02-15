import { configureStore } from '@reduxjs/toolkit';
import themeSlice from '../common/ThemeSwitch/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});
