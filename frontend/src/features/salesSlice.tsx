import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit'
import { setRefresh } from './refreshSlice';
import axios from 'axios';



type ApiResponse = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  sale_date: string; 
}

type ApiPost = {
  product_id: number;
  quantity: number;
}


type ResponseState = {
  sales: ApiResponse[];
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
    sales: [],
    loading: false,
    error: ''
  };

export const fetchItems = createAsyncThunk('sales/fetchItems',
  async () => {
      const response = await axios.get(import.meta.env.GET_ENDPOINT);
      console.log(response.data);
      return response.data; // Return the data from the API response
  }
)

export const saveItem = createAsyncThunk('sales/saveItem',
  async (item :ApiPost, {dispatch} ) => {
    try{
      const response = await axios.post(import.meta.env.POST_ENDPOINT, item);
      dispatch(setRefresh(true));
      return response.data; // Return the data from the API response  
    }
    catch(error){
      console.log("failed")
      
    }
  }
)
  
export const salesSlice = createSlice({
    name: 'sales',
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
            state.sales = action.payload;
          })
          .addCase(fetchItems.rejected, (state, action) => {  
            state.loading = false;
            state.error = "Error retrieving items from server.";
          });
      }
})

//export const { addWineToInventory } = inventorySlice.actions

export default salesSlice.reducer;
