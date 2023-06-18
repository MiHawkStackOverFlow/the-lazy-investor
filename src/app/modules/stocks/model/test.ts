export type Movie = {
  title: string;
  year: number;
  rating: number;
  votes: number;
  running_times: number;
};

export async function fetchMovies(): Promise<Movie[]> {
  try {
    const response = await fetch(
      'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json',
      { headers: { Accept: 'application/json' } }
    );
    const movies: Movie[] = await response.json();
    return movies;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
}


// movies released after 2000, minimun rating of 8, number of votes > 10000

// Movie interface is there so we have structure -----> all the types
// Have a DI into a service class ----> HTTP calls to the movies.json file ----> Rxjs param map or filter ----> Get all movie data
// Components -----> 1 dumb show movie details ---> poster, name, ratings, number of votes, release of movie ----> Card Component
//            -----> 2 main Dashboard of movies components -----> loop and provide data to dumb
// Dashboard our needs ngOnIt ----> get dependency injected filter ----> function on service data and filter this data
// ngFor over the filtered


// Read ME
