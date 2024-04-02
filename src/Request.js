import 'dotenv/config'
const key = process.env.REACT_APP_KEY

console.log(key, 'request key')

const requests = {
    requestPopular:`http://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en=US&page=1`,
    requestTopRated: `http://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `http://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `http://api.themoviedb.org/3/movie?api_key=${key}&language=en-US&querry=horror&page=1`,
    requestUpcoming: `http://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,




}
export default requests