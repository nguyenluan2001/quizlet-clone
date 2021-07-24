import {createSlice} from "@reduxjs/toolkit"
const initialState={
    title:"",
    description:"",
    listTerms:[
        {
            id:"10000",
            word:"",
            definition:""
        }
    ]
}
const createSetSlice=createSlice({
    name:"createSet",
    initialState,
    reducers:
    {
        addTerm:(state,action)=>{
            let newTerms= {
                id:Math.floor(Math.random()*100000),
                word:"",
                definition:""
            }
            state.listTerms.push(newTerms)
        },
        deleteTerm:(state,action)=>{
            let newListTerms=[...state.listTerms].filter(item=>{
                return item.id!=action.payload
            })
            state.listTerms=newListTerms
        }
    }

})
export const {addTerm,deleteTerm}=createSetSlice.actions
export default createSetSlice.reducer