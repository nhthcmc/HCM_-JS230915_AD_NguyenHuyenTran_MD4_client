import { createSlice } from "@reduxjs/toolkit";

export type question = {
    id: number;
    name: string;
    status: boolean;

}
interface InitState {
    data: question | null,
}
let initialState: InitState = {
    data: null,
}
const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        create: (state, action) => {
            state.data.push(action.payload);
        },
        update: (state, action) => {
            state.data = state.data.map((item) => {
                if (item.id == action.payload.id) {
                    return action.payload;
                } else {
                    return item;
                }
            })
        },
        delete: (state, action) => {
            state.data = state.data.filter((item) => item.id != action.payload);
        },
    }
})

export const questionReducer = questionSlice.reducer;
export const questionAction = questionSlice.actions;