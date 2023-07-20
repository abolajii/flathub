import { createSelector } from "@reduxjs/toolkit";

 const selectProperty  = (state) => state.propertyReducer;

export const selectAllProperties = createSelector([selectProperty], property => property.properties);