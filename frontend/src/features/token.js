import {createSlice} from '@reduxjs/toolkit'
export const tokenSlice =createSlice({
        name : 'token',
        initialState :{value:{token:"",userId:""}},
        reducers :{ 
            auth :(state,action)=>{
                state.value=action.payload
            }
        }
});
export const {auth}=tokenSlice.actions;
export default tokenSlice.reducer;