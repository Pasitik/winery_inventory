import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from './features/inventory/inventorySlice'; 
import salesReducer from './features/salesSlice'; 
import urgentAttentionReducer from './features/urgentSlice'
import refreshReducer from './features/refreshSlice';

export const store = configureStore({
    reducer: {
        inventory: inventoryReducer,
        sales: salesReducer,
        urgentAttention: urgentAttentionReducer,
        refresh: refreshReducer
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
