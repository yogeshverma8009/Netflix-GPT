import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
//create slice has few parameters
name:"movies",
initialState: {
    nowPlayingMovies : null,
    popularMovies: null,
    trailerVideo: null,
    
}, //empty object

reducers:{
    //add action
    addNowPlayingMovies:(state,action) =>{
        state.nowPlayingMovies= action.payload;
    },
    addPopularMovies:(state,action)=>{
        state.popularMovies = action.payload;
    },
    addTrailerVideo:(state, action) =>{
            state.trailerVideo = action.payload;
        },
    }

});

export const {addNowPlayingMovies,addPopularMovies,addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer;