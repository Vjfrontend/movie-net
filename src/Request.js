
console.log(process.env.REACT_APP_KEY, 'request key')

const requests = {
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=en=US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&querry=horror&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`,




}
export default requests