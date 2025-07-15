import axios from 'axios';

export const searchMovies = async (req, res) => {
  const searchTerm = req.query.title;
  console.log('Title:', searchTerm);

  // Validate that the title query parameter exists
  if (!searchTerm) {
    return res.status(400).json({ error: "Title query parameter is required" });
  }

  try {
    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        s: searchTerm,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    //  if not found
    if (response.data.Response === "False") {
      return res.status(404).json({ error: response.data.Error || "No movies found" });
    }

    // Return the list of movies
    return res.json(response.data.Search);
  } catch (error) {
    console.error('Error fetching data from OMDb API:', error.message);
    return res.status(500).json({ error: "An error occurred while fetching movie data" });
  }
};

export const getMovieDetails = async (req, res) => {
  const movieId = req.params.id;

  try {
    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        i: movieId,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    // O if not found
    if (response.data.Response === "False") {
      return res.status(404).json({ error: response.data.Error || "No movies found" });
    }

    return res.json(response.data);
  } catch (error) {
    console.error('Error fetching movie details:', error.message);
    return res.status(500).json({ error: "An error occurred while fetching movie details" });
  }
};


