import { configureStore } from "@reduxjs/toolkit";
import networkLocationReducer from "./NetworkLocations/slice";

const store = configureStore({
  reducer: {
    networkLocations: networkLocationReducer,
    // Add other reducers here if needed
  },
});

export default store;
