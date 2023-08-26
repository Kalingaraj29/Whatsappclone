import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
  user:"",
  photourl:null
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    userin: (state,action) => {
          state.user=action.payload;
          //state.photourl=action.payload.photourl
         // console.log(state.user);
    },
    usersignout:(state,action)=>{
        state.user=action.payload
    }
  }
})
 
export const { userin,usersignout } = counterSlice.actions;

export default counterSlice.reducer;
