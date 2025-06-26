const API_KEY = "cb122a4c998dbe94e1bdf34a494852cf";

const BASE_URL = "https://api.themoviedb.org/3"



export const getPopularMovies = async () => {
    const respones = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await respones.json()
    return data.results
};


export const searchMovies = async (query) => {
    const respones = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`
);
    const data = await respones.json()
    return data.results
};

