// ------------------------------------------------------------------------------------------------------
// https://api.themoviedb.org/3/trending/all/week?api_key=46215e7a348c1e43ff4428f4031f04fa&language=en-US
// https://api.themoviedb.org/3/discover/tv?api_key=46215e7a348c1e43ff4428f4031f04fa&language=en-US
// https://api.themoviedb.org/3/movie/top_rated?api_key=46215e7a348c1e43ff4428f4031f04fa&language=en-US
const API_KEY = "46215e7a348c1e43ff4428f4031f04fa";
// ------------------------------------------------------------------------------------------------------


let movie;
let rand = Math.floor(Math.random() * 3)
let url
// console.log(rand)
if(rand == 0) {
    url = 'https://api.themoviedb.org/3/trending/all/week?api_key=46215e7a348c1e43ff4428f4031f04fa&language=en-US'
} else if (rand == 1) {
    url = 'https://api.themoviedb.org/3/discover/tv?api_key=46215e7a348c1e43ff4428f4031f04fa&language=en-US'
} else {
    url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=46215e7a348c1e43ff4428f4031f04fa&language=en-US'
}
fetch(url)
.then(res => res.json())
.then(res => {
    movie = res.results[Math.floor(Math.random() * 20 - 1)]
    // console.log(res)
})

// export { movie }