// ./filters/store.ts

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import filterReducer from './filtred-product/filterSlice';
import registrationFormReducer from '../filters/filtred-product/registrationFormSlice';
import cartSlice from './filtred-product/CartSlice';
import WishListReducer from './filtred-product/WishListSlice';
import BestSellerSlice from './filtred-product/Best-SellerSlice';

// Combine reducers
const rootReducer = combineReducers({
  filter: filterReducer,
  registrationForm: registrationFormReducer,
  cart :cartSlice,
  Whishlist : WishListReducer,
  BestSellerSlice: BestSellerSlice,
  // Add other reducers here if you have them
});

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['registrationForm'] // Reducers to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor }; // Export both store and persistor










// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import filterReducer from './filtred-product/filterSlice';
// // import storage from 'redux-persist/lib/storage';
// // import persistReducer from 'redux-persist/es/persistReducer';
// // import persistStore from 'redux-persist/es/persistStore';

// // Combine reducers
// const rootReducer = combineReducers({
//   filter: filterReducer,
//   // Add other reducers here if you have them
// });

// // const persistConfig = {
// //   key: 'root',
// //   storage,
// // }

// // const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

// // Create the store
// const store = configureStore({
//   reducer: rootReducer,
  
// });

// // export const persistor = persistStore(store);

// // Define types for RootState and AppDispatch
// export type RootState = ReturnType<typeof rootReducer>;
// export type AppDispatch = typeof store.dispatch;

// export default store;
