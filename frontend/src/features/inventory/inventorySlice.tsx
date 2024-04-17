import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import stock from '../../Inventory'
import { RootState } from '../../store';
import { PayloadAction } from '@reduxjs/toolkit';


type ApiResponse = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  expirery: string; 
}

type ApiPost = {
  name: string;
  quantity: number;
  price: number;
  expirery: string; 
}


type ResponseState = {
  inventory: ApiResponse[];
  loading: boolean;
  error: string | null;
}


const initialState: ResponseState = {
    // inventory: {
    //   wines:
    //     // Wines data here...
    //     stock.inventory.wines
    // },
    // sales:
    //   // Sales data here...
    //   stock.sales
    inventory: [],
    loading: false,
    error: ''
  };

export const fetchItems = createAsyncThunk('inventory/fetchItems',
  async () => {
      const response = await axios.get('');
      console.log(response.data);
      return response.data; // Return the data from the API response
  }
)

export const saveItem = createAsyncThunk('inventory/saveItem',
  async (item :ApiPost ) => {
    const response = await axios.post('', item);
    return response.data; // Return the data from the API response

  }
)
  
export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
           // addWineToInventory: (state, action) => {
              //state.inventory.wines.push(action.payload);
            //}
    },
    extraReducers: builder => {
        builder
          .addCase(fetchItems.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchItems.fulfilled, (state, action) => {
            state.loading = false;
            state.error = '';
            state.inventory = action.payload;
          })
          .addCase(fetchItems.rejected, (state, action) => {  
            state.loading = false;
            state.error = "Error retrieving items from server.";
          });
      }
})

//export const { addWineToInventory } = inventorySlice.actions

export default inventorySlice.reducer;
