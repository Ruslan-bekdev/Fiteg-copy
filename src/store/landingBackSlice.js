import {createSlice} from "@reduxjs/toolkit";

const landingBackSlice = createSlice({
    name: 'landingBackSlice',
    initialState:{
        isBackActive: false,
    },
    reducers: {
        setBackActiveStatus: (state, action) => {
            state.isBackActive = action.payload;
        },
    },
});

export const {setBackActiveStatus} = landingBackSlice.actions;

export default landingBackSlice.reducer;