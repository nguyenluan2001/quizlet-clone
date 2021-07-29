// redux for learning course
import { createSlice } from "@reduxjs/toolkit"
// const initialState={
//     listTerms:null,// do not modify this
//     listTermsWriting:null,// using this when writing
//     currentTerm:null,
//     correct:[],
//     wrong:[],
//     rounds:[]
// }
const initialState = {
    listTerms: null,// do not modify this
    listRounds: [],
    currentRound: null
}
export const writeSlice = createSlice({
    name: "write",
    initialState,
    reducers: {
        initWrite: (state, action) => {
            state.listTerms = action.payload.listTerms
            // state.listTermsWriting=action.payload.listTerms
            let randomIndex = Math.floor(Math.random() * (action.payload.listTerms.length - 1))
            let round = {
                id: Math.floor(Math.random() * 100000),
                listTerms: action.payload.listTerms,
                listTermsWriting: action.payload.listTerms,
                currentTerm: action.payload.listTerms[randomIndex],
                correct: [],
                wrong: []
            }
            state.listRounds.push(round)
            state.currentRound = round
        },
        updateCurrentRound: (state, action) => {
            if (action.payload == "correct") {
                state.currentRound.correct.push(state.currentRound.currentTerm)
                let newListTerms = state.currentRound.listTermsWriting.filter(item => item.id != state.currentRound.currentTerm.id)
                let randomIndex = Math.floor(Math.random() * (newListTerms.length - 1))
                state.currentRound.currentTerm = newListTerms[randomIndex]
                state.currentRound.listTermsWriting = newListTerms
            }
            else {
                state.currentRound.wrong.push(state.currentRound.currentTerm)
                let newListTerms = state.currentRound.listTermsWriting.filter(item => item.id != state.currentRound.currentTerm.id)
                let randomIndex = Math.floor(Math.random() * (newListTerms.length - 1))
                state.currentRound.currentTerm = newListTerms[randomIndex]
                state.currentRound.listTermsWriting = newListTerms
            }
        },
        updateListRounds: (state, action) => {
            let newListRounds = [...state.listRounds]
            newListRounds = newListRounds.map(item => {
                if (item.id == state.currentRound.id) {
                    return state.currentRound
                }
                else {
                    return item
                }
            })
            state.listRounds = newListRounds
        },
        updateCorrect: (state, action) => {
            state.currentRound.correct.push(state.currentRound.currentTerm)
            let newListTerms = state.currentRound.listTermsWriting.filter(item => item.id != state.currentRound.currentTerm.id)
            let randomIndex = Math.floor(Math.random() * (newListTerms.length - 1))
            state.currentRound.currentTerm = newListTerms[randomIndex]
            state.currentRound.listTermsWriting = newListTerms
        },
        updateWrong: (state, action) => {
            state.currentRound.wrong.push(state.currentRound.currentTerm)
            let newListTerms = state.currentRound.listTermsWriting.filter(item => item.id != state.currentRound.currentTerm.id)
            let randomIndex = Math.floor(Math.random() * (newListTerms.length - 1))
            state.currentRound.currentTerm = newListTerms[randomIndex]
            state.currentRound.listTermsWriting = newListTerms
        },
        continueWriting: (state, action) => {
            let randomIndex = Math.floor(Math.random() * (state.listRounds[state.listRounds.length - 1].wrong.length - 1))
            let round = {
                id: Math.floor(Math.random() * 100000),
                listTerms: state.listRounds[state.listRounds.length - 1].wrong,
                listTermsWriting: state.listRounds[state.listRounds.length - 1].wrong,
                currentTerm: state.listRounds[state.listRounds.length - 1].wrong[randomIndex],
                correct: [],
                wrong: []
            }
            state.listRounds.push(round)
            state.currentRound = round
        },
        resetWrite: (state, action) => {
            return initialState
        },
        // startRound: (state, action) => {
        //     let round = {
        //         id: Math.floor(Math.random() * 100000),
        //         totalTerms: state.listTermsWriting.length,
        //         listTerms: []
        //     }
        //     state.rounds.push(round)
        // },
        // updateRound: (state, action) => {

        // }
    }

})
export const { initWrite,
    updateCurrentRound,
    updateListRounds,
    updateCorrect,
    updateWrong,
    continueWriting,
    resetWrite
} = writeSlice.actions
export default writeSlice.reducer