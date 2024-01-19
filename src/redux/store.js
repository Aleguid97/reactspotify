const store = configureStore({
 reducer:combinbeReducers, 
  search: searchReducer,
})

import{configureStore, combinbeReducers} from "@reduxjs/toolkit"
import searchReducer from "./Search"