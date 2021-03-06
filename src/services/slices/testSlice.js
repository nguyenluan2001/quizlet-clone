import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { firestore } from "../firebase"
const initialState = {
    listTerms: null,
    listTermsTesting: null,
    groupTermByType: {
        "write": [],
        "match-card": [],
        "multiple": [],
        "trueFalse": []

    },
    correct:[]
}
const fetchCourseById = createAsyncThunk(
    'fetchCourse',
    async (courseId, thunkAPI) => {
        const response = await firestore.collection("courses").doc(courseId).get()
        console.log(response)
        return response.data()
    }
)
const testSLice = createSlice({
    name: "test",
    initialState,
    reducers: {
        initTest: (state, action) => {
            let numQuestions = action.payload.numQuestions
            let typeQuestions = action.payload.typeQuestions
            let newListTerms = [...state.listTerms]
            newListTerms = newListTerms.sort(() => Math.random() - Math.random()).slice(0, numQuestions)
            state.listTermsTesting=JSON.parse(JSON.stringify(newListTerms))
            let newListTermsLen=newListTerms.length
            typeQuestions.forEach(type => {
                let count = Math.floor(newListTermsLen/typeQuestions.length)
                while (count > 0) {
                    let randomIndex = Math.floor(Math.random() * (newListTerms.length - 1))
                    state.groupTermByType[type].push(newListTerms[randomIndex])
                    newListTerms.splice(randomIndex, 1)
                    count--
                }
            })
            if(newListTerms.length>0)
            {
                newListTerms.forEach((item,index)=>{
                    let type=typeQuestions[index]
                    console.log(type)
                    state.groupTermByType[type].push(item)
                })
            }


            // state.listTermsTesting=newListTerms

        },
        updateCorrect:(state,action)=>{
            state.correct.push(action.payload)
        },
        resetTest:(state,action)=>{
            state.listTermsTesting= [1,2,3]
            state.groupTermByType={
                "write": [],
                "match-card": [],
                "multiple": [],
                "trueFalse": []
        
            }
            state.correct=[]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCourseById.fulfilled, (state, action) => {
            state.listTerms = action.payload.listTerms
        })
    }

})
export { fetchCourseById }
export const { initTest,resetTest,updateCorrect } = testSLice.actions
export default testSLice.reducer