import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import themeReducer from '../common/themeSlice';
import galeryReducer from '../features/homepage/Portfolio/Galery/galerySlice';
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    theme: themeReducer,
    galery: galeryReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
