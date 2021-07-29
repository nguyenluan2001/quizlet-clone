// redux for learning course
import {createSlice} from "@reduxjs/toolkit"
const initialState={
    listTerms:null,// do not modify this
    listTermsLearning:null,// using this when learning
    currentTerm:null,
    correct:[],
    wrong:[]
}
export const learnSlice=createSlice({
    name:"learn",
    initialState,
    reducers:{
        initLearn:(state,action)=>
        {
            state.listTerms=action.payload.listTerms
            state.listTermsLearning=action.payload.listTerms
            let randomIndex=Math.floor(Math.random()*(action.payload.listTerms.length-1))
            state.currentTerm=action.payload.listTerms[randomIndex]
        },
        updateCorrect:(state,action)=>
        {
            state.correct.push(state.currentTerm)
            let newListTerms=state.listTermsLearning.filter(item=>item.id!=state.currentTerm.id)
            let randomIndex=Math.floor(Math.random()*(newListTerms.length-1))
            state.currentTerm=newListTerms[randomIndex]
            state.listTermsLearning=newListTerms
        },
        updateWrong:(state,action)=>{
            state.wrong.push(state.currentTerm)
            let newListTerms=state.listTermsLearning.filter(item=>item.id!=state.currentTerm.id)
            let randomIndex=Math.floor(Math.random()*(newListTerms.length-1))
            state.currentTerm=newListTerms[randomIndex]
            state.listTermsLearning=newListTerms
        },
        resetLearn:(state,action)=>
        {
            return initialState
        }
    }

})
export const {initLearn,updateCorrect,updateWrong,resetLearn}=learnSlice.actions
export default learnSlice.reducer