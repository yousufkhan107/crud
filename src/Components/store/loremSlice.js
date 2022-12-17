import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const STATUSES= {
idle : "idle",
loading : "loading",
error : "error"
}

const loremSlice = createSlice({
    name :"lorem",
    initialState:{
data : [],
status : STATUSES
    },
    extraReducers :(values)=>{
values.addCase(fetchApi.pending,(state,action)=>{
    state.status=STATUSES.loading
})
values.addCase(fetchApi.fulfilled,(state,action)=>{
    state.status=STATUSES.idle;
    state.data = action.payload;
})
values.addCase(fetchApi.rejected,(state,action)=>{
    state.status=STATUSES.error
})
    }


})


const {reducer} = loremSlice;


export const fetchApi = createAsyncThunk("apis/fetch", async () => {
    const data = await fetch("http://localhost:5000/api/getting");
    const apis = await data.json();
  
    return apis;
  });

  export default reducer;