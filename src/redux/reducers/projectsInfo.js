import {
    createAsyncThunk,
    createSlice
}
from "@reduxjs/toolkit";
import firebase from '../../firebase';


export const upLoadProjects = createAsyncThunk(
    'project/upLoadProjects',
    async () => {
        const fire = firebase.firestore().collection("projects");

        let items = [];
        await fire.get().then((item) => {
            items = item.docs.map((doc) => doc.data());  
        });
        return items;
    }
)

export const projectSlice = createSlice({
    name: "project",
    initialState: {
        items: [

        ],
        isLoad: true,
    },
    reducers: {
       setLoad: (state, action) => {
           state.isLoad = action.payload;
       }
    },
    extraReducers: (builder) => {
        builder.addCase(upLoadProjects.fulfilled, (state, action) => {
            state.items = [];
            action.payload.forEach(el => {
                state.items.push(el);
            })
        })
    },
});

export const { setLoad } = projectSlice.actions;

export default projectSlice.reducer;