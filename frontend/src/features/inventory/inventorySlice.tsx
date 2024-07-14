import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setRefresh } from '../refreshSlice';
import axios from 'axios';

export type ApiResponse = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  expirery: string;
  unit_cost: number;
  sales:{
    id:number;
    product_id: number;
    quantity: number;
    price: number;
    sale_date: string
  }[]
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

//  const GetEndPoint = import.meta.env.GET_ENDPOINT

export const fetchItems = createAsyncThunk('inventory/fetchItems',
  async () => {
      const response = await axios.get(import.meta.env.GET_ENDPOINT);
      console.log(response.data);
      return response.data; // Return the data from the API response
  }
)

export const saveItem = createAsyncThunk('inventory/saveItem',
  async (item :ApiPost, {dispatch} ) => {
    try{
      const response = await axios.post(import.meta.env.POST_ENDPOINT, item);
      dispatch(setRefresh(true));
      return response.data; // Return the data from the API response
    }
    catch(error){
      console.log(error)
    }
  }
)

export const editItem = createAsyncThunk('inventory/editItem',
  async (item: ApiResponse, { dispatch }) => {
    // const { id, price } = item; // Extract the ID and price from the item
    // const updatedData = { price }; // Create an object with only the price field
    const {id} = item

    try {
      const response = await axios.put(import.meta.env.PUT_ENDPOINT+id+"/", item);
      dispatch(setRefresh(true));
      return response.data; // Return the data from the API response
    } catch (error) {
      console.error("Failed:", error);
      throw error; // Rethrow the error to handle it elsewhere
    }
  }
);

export const deleteItem = createAsyncThunk('inventory/deleteItem',
  async (item: ApiResponse, {dispatch}) => {
    const {id} = item
    try{
      const response = await axios.delete(import.meta.env.DELETE_ENDPOINT + id);
      dispatch(setRefresh(true));
      return response.data; // Return the data from the API response
    }
    catch(error){
      console.log("Failed")
    }
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
