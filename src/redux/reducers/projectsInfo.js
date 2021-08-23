import {
    createAsyncThunk,
    createSlice
}
from "@reduxjs/toolkit";
import firebase from '../../firebase';


export const upLoadProjects = createAsyncThunk(
    'project/upLoadProjects',
    async (start, {rejectWithValue}) => {
        try {
            const fire = firebase.firestore().collection("projects").orderBy("id", "asc").startAt(start).limit(3);
            let items = [];

            await fire.get().then((item) => {    
                if(item.empty){
                    throw new Error("No data available!");
                }
                items = item.docs.map((doc) => doc.data());
            });
            return items;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const upLoadProject = createAsyncThunk(
    'project/upLoadProject',
    async (docName, {rejectWithValue}) => {
        try {
            const fire = firebase.firestore().collection("projects").doc(docName);
            let doc;

            await fire.get().then((item) => {
                if(item.empty){
                    throw new Error("No data available!");
                }
                doc = item.data();
            });
            return doc;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const projectSlice = createSlice({
    name: "project",
    initialState: {
        items: [

        ],
        currentProject: null,
        status: "loading",
        nextItemId: null,
        error: null,
    },
    reducers: {
        setLoad: (state, action) => {
            state.status = action.payload;
        },
        setnextItemId: (state, action) => {
            state.nextItemId = action.payload;
        }
    },
    extraReducers: {
        [upLoadProjects.fulfilled]: (state, action) => {
            state.status = "loading";
            state.items = [];
            action.payload.forEach(el => {
                state.items.push(el);
            })
            state.nextItemId = state.items[state.items.length - 1].id + 1;
        },
        [upLoadProjects.rejected]: (state, action) => {
            state.status = "error";
            state.error = action.payload;
        },
        [upLoadProject.fulfilled]: (state, action) => {
            state.status = "loading";
            state.currentProject = action.payload;
        },
        [upLoadProject.rejected]: (state, action) => {
            state.status = "error";
            state.error = action.payload;
        },
    },
});

export const {
    setLoad,
    setnextItemId
} = projectSlice.actions;

export default projectSlice.reducer;