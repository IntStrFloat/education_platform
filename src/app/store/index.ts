import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './store';
import persistStore from 'redux-persist/es/persistStore';
import { useDispatch, useSelector } from 'react-redux'
import { setupListeners } from '@reduxjs/toolkit/query';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
  });
  const persistor = persistStore(store);

  return { store, persistor };
};
const state = setupStore().store.getState
const disp = setupStore().store.dispatch
export type RootState = ReturnType<typeof state>
export type AppDispatch = typeof disp

setupListeners(setupStore().store.dispatch);

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()