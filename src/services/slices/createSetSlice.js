import { createSlice } from "@reduxjs/toolkit"
import { firestore, auth } from "../firebase"
const initialState = {
    title: "",
    description: "",
    listTerms: [
        {
            id: Math.floor(Math.random() * 100000).toString(),
            word: "",
            definition: ""
        }
    ]
}
const createSetSlice = createSlice({
    name: "createSet",
    initialState,
    reducers:
    {
        addTerm: (state, action) => {
            let newTerms = {
                id: Math.floor(Math.random() * 100000).toString(),
                word: "",
                definition: ""
            }
            state.listTerms.push(newTerms)
        },
        deleteTerm: (state, action) => {
            let newListTerms = [...state.listTerms].filter(item => {
                return item.id != action.payload
            })
            state.listTerms = newListTerms
        },
        updateTerm: (state, action) => {
            let newListTerms = [...state.listTerms].map(item => {
                if (item.id == action.payload.id) {
                    return { ...item, word: action.payload.word, definition: action.payload.definition }
                }
                else {
                    return item
                }
            })
            state.listTerms = newListTerms
        },
        updateCourseInfo: (state, action) => {
            state.title = action.payload.title
            state.description = action.payload.description
        },
        setCourse: (state, action) => { //set state for edit
            return action.payload
        },
        resetCreateSet: (state, action) => {
            console.log("reset")
            state.title = ""
            state.description = ""
            state.listTerms = [
                {
                    id: Math.floor(Math.random() * 100000).toString(),
                    word: "",
                    definition: ""
                }
            ]
        }
    }

})
export const { addTerm, deleteTerm, updateTerm, updateCourseInfo, setCourse, resetCreateSet } = createSetSlice.actions
export default createSetSlice.reducer