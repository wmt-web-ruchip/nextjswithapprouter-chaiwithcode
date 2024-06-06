import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getNetworkLocations,
  getNetworkLocationById,
  createNetworkLocation,
  updateNetworkLocation,
  deleteNetworkLocation,
} from "../../Api/networkLocations";

// Thunk action for getting a list of network locations
export const fetchNetworkLocations = createAsyncThunk(
  "networkLocations/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getNetworkLocations(0, 10);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Thunk action for getting a network location by ID
export const fetchNetworkLocationById = createAsyncThunk(
  "networkLocations/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getNetworkLocationById(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Thunk action for creating a new network location
export const createNewNetworkLocation = createAsyncThunk(
  "networkLocations/create",
  async (networkLocationData, { rejectWithValue }) => {
    try {
      const response = await createNetworkLocation(networkLocationData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Thunk action for updating a network location by ID
export const updateNetworkLocationById = createAsyncThunk(
  "networkLocations/updateById",
  async ({ id, updatedNetworkLocationData }, { rejectWithValue }) => {
    try {
      const response = await updateNetworkLocation(
        id,
        updatedNetworkLocationData,
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Thunk action for deleting a network location by ID
export const deleteNetworkLocationById = createAsyncThunk(
  "networkLocations/deleteById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteNetworkLocation(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
