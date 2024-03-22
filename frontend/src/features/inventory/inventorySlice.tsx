import { createSlice } from '@reduxjs/toolkit'
import stock from '../../Inventory'

const initialState = {
    inventory: {
      wines:
        // Wines data here...
        stock.inventory.wines
    },
    sales:
      // Sales data here...
      stock.sales
  };
  
export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
            addWineToInventory: (state, action) => {
              state.inventory.wines.push(action.payload);
            }
    }
})

export const { addWineToInventory } = inventorySlice.actions

export default inventorySlice.reducer;