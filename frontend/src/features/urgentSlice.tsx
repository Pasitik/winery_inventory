import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//import { RootState } from './store';

// Define the type for a single item
type Sales = {
    id: number;
    product_id: number;
    quantity: number;
    sale_date: string;
};

type UrgentItem = {
    id: number;
    name: string;
    quantity: number;
    price: number;
    expirery: string;
    sales: Sales;
};

// Define the UrgentAttentionState type
type UrgentAttentionState = {
    items: UrgentItem[]; // Array of UrgentItem objects
};

// Define the initial state
const initialState: UrgentAttentionState = {
    items: [],
};


const urgentAttentionSlice = createSlice({
  name: 'urgentAttention',
  initialState,
  reducers: {
    addUrgent: (state, action) => {
        state.items = [...state.items, action.payload]
        console.log(state.items)
    }
    },
  });
  
  export const { addUrgent } = urgentAttentionSlice.actions;
  
  //export const selectUrgentAttentionItems = (state: RootState) => state.urgentAttention.items;
  
  export default urgentAttentionSlice.reducer;