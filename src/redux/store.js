import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./reducers/projectsInfo";

export default configureStore({
    reducer: {
        projects: projectSlice,
    }
})