import { configureStore } from "@reduxjs/toolkit";
import cities from "./cities";
import routes from "./routes";
import filter from "./filter";
import seats from "./seats";

export default  configureStore({
  reducer: {
    cities: cities,
    routes: routes,
    filter: filter,
    seats: seats,
  },
});