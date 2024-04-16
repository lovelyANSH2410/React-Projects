import React, { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "./Store/Context";
import AddMovieForm from "./AddMovieForm";

const Movie = () => {
  const { movies, setMovies } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await fetch(
        "https://react-ecom-8f790-default-rtdb.firebaseio.com/movies.json"
      );
      const json = await data.json();
      const loadedMovies = [];

      for (const key in json) {
        loadedMovies.push({
          episode_id: key,
          title: json[key].title,
          opening_crawl: json[key].opening_crawl,
          release_date: json[key].release_date,
        });
      }
      setIsLoading(false);
      setMovies(loadedMovies);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }, [setMovies]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const toggleForm = () => {
    setOpenForm(!openForm);
  };

  const deleteItem = async (episode_id) => {
    try {
      await fetch(
        `https://react-ecom-8f790-default-rtdb.firebaseio.com/movies/${episode_id}.json`,
        {
          method: "DELETE",
        }
      );
      fetchData();
    } catch (error) {
      console.log("Error deleting item:", error);
    }
  };

  return (
    <div className="text-center mt-20 mb-40">
      <button
        className="border-2 font-bold border-white p-2 rounded-md text-white hover:scale-105 duration-500 hover:opacity-80"
        onClick={fetchData}
      >
        Fetch Movie Data
      </button>
      <button
        className="border-2 m-2 font-bold border-white p-2 rounded-md text-white hover:scale-105 duration-500 hover:opacity-80"
        onClick={toggleForm}
      >
        Add New
      </button>
      {openForm && <AddMovieForm toggleForm={toggleForm} />}
      {!isLoading && movies.length === 0 && <p className="text-6xl m-20 text-white">Found no movies.</p>}
      
      {isLoading ? (
        <h1 className="text-6xl m-20 text-white">Searching for movies...</h1>
      ) : (
        movies.map((item) => (
          <div key={item.episode_id}>
            <div className="text-white w-[80%] md:w-[50%] m-auto mt-10 hover:scale-105 duration-500 border-2 border-white p-6">
              <div className="flex justify-between">
                <h3 className="text-3xl font-bold">{item.title}</h3>
                <h1 className="text-3xl font-bold">
                  Release: {item.release_date}
                </h1>
              </div>
              <p className="p-2 w-[100%] italic leading-relaxed">
                {item.opening_crawl}
              </p>
              <button
                className="border-2 m-2 font-bold border-white p-2 rounded-md text-white hover:scale-105 duration-500 hover:opacity-80"
                onClick={() => deleteItem(item.episode_id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Movie;
