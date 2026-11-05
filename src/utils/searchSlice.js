import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: " search",
    initialState : {

    },
    reducers : {
        //{"ip" : ["ip","iphone","iphone11"]}
        //if state is initially
        // {
        //     "ip": ["iphone"]
        //  }
        //and action.payload is:
        // {
        //     "ip": ["iphone", "iphone 11"]
        //  }
        //then state = Object.assign(state, action.payload);
        // {
        //     "ip": ["iphone", "iphone 11"]
        //  }
          
        cacheResults : (state,action) =>{
            state = Object.assign(state,action.payload)
        }
    }
})

export const {cacheResults} = searchSlice.actions
export default searchSlice.reducer


