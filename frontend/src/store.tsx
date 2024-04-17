import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from './features/inventory/inventorySlice'; 
import salesReducer from './features/salesSlice'; 

export const store = configureStore({
    reducer: {
        inventory: inventoryReducer,
        sales: salesReducer
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
