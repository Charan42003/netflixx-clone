const API_KEY = "46215e7a348c1e43ff4428f4031f04fa";

const Requests = {
    fetchTrending: '/trending/all/week?api_key=46215e7a348c1e43ff4428f4031f04fa&language=en-US',
    fetchNetflixOriginals: '/discover/tv?api_key=46215e7a348c1e43ff4428f4031f04fa&with_networks=213',
    fetchTopRated: '/movie/top_rated?api_key=46215e7a348c1e43ff4428f4031f04fa&languages=en-US',
    fetchActionMovies: '/discover/movie?api_key=46215e7a348c1e43ff4428f4031f04fa&with_genres=28',
    fetchComedyMovies: '/discover/movie?api_key=46215e7a348c1e43ff4428f4031f04fa&with_genres=35',
    fetchHorrorMovies: '/discover/movie?api_key=46215e7a348c1e43ff4428f4031f04fa&with_genres=27',
    fetchRomanceMovies: '/discover/movie?api_key=46215e7a348c1e43ff4428f4031f04fa&with_genres=10749',
    fetchDocumentaries: '/discover/movie?api_key=46215e7a348c1e43ff4428f4031f04fa&with_genres=99',

}

export default Requests
// https://api.themoviedb.org/3/trending/all/week?api_key=46215e7a348c1e43ff4428f4031f04fa&language=en-US
// https://api.themoviedb.org/3/discover/tv?api_key=46215e7a348c1e43ff4428f4031f04fa&language=en-US
// https://api.themoviedb.org/3/movie/top_rated?api_key=46215e7a348c1e43ff4428f4031f04fa&language=en-US
// https://api.themoviedb.org/3/discover/movie?api_key=46215e7a348c1e43ff4428f4031f04fa&with_genres=28
// https://api.themoviedb.org/3/discover/movie?api_key=46215e7a348c1e43ff4428f4031f04fa&with_genres=35
// https://api.themoviedb.org/3/discover/movie?api_key=46215e7a348c1e43ff4428f4031f04fa&with_genres=37
// https://api.themoviedb.org/3/discover/movie?api_key=46215e7a348c1e43ff4428f4031f04fa&with_genres=10749
// https://api.themoviedb.org/3/discover/movie?api_key=46215e7a348c1e43ff4428f4031f04fa&with_genres=99