import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { questionReducer } from "./slices/question.slice";
import { categoryReducer } from "./slices/category.slice";

const RootReducer = combineReducers({
    questionStore: questionReducer,
    categoryStore: categoryReducer
})

export type Store = ReturnType<typeof RootReducer>
export const store = configureStore({
    reducer: RootReducer
})
