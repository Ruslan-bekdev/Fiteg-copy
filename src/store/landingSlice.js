import {createSlice} from "@reduxjs/toolkit";

const landingSlice = createSlice({
    name: 'landingSlice',
    initialState:{
        isBackActive: false,
    },
    reducers: {
        setBackActiveStatus: (state, action) => {
            state.isBackActive = action.payload;
        },
    },
});

export const {setBackActiveStatus} = landingSlice.actions;

export default landingSlice.reducer;